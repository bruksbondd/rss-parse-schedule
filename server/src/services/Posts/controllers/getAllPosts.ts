import PostsModel from '../model';
import type { Response } from '../..';

type SortOption = 'isoDate' | 'creator' | 'title';
type SortOrder = 1 | -1;
type FilterOption = 'pubDate' | 'creator' | 'categories' | 'title';
type FilterValue = string | string[];

interface GetFeedRequest {
  query: {
    page: string;
    filterBy: FilterOption;
    sortBy: SortOption;
    filterValue: FilterValue;
    sortOrder: SortOrder;
  };
}

const validateValue = (
  filterValue: FilterValue,
  filterOption: FilterOption
) => {
  if (filterValue)
    return { [filterOption]: { $regex: filterValue, $options: 'i' } };
  else return {};
};

// Parse and return feed
const getAllPosts = async (
  req: GetFeedRequest,
  res: Response
): Promise<void> => {
  try {
    // Implementation of pagination. We start from 1 page and have 10 items limit per page
    const pageSize = 10; // Count of posts per page
    const currentPage: number = parseInt(req.query.page) || 1; // Current page, which we have gotten from user
    const startIndex: number = (currentPage - 1) * pageSize; // From which item starts page

    // Sorting options. There are 3 options: 'alphabeticallyName', 'isoDate', 'alphabeticallyTitle'
    const sortOption: SortOption = req.query.sortBy || 'isoDate';

    // Sorting order. There are 2 options: -1, 1
    const sortOrder: SortOrder = req.query.sortOrder || 1;

    // Filter options. There are 4 options: 'title', 'name', 'date', 'categories'
    const filterOption: FilterOption = req.query.filterBy || 'creator';

    // Filter value. By default it is ''
    const filterValue: FilterValue = req.query.filterValue || '';

    // Get total count of all Posts
    const totalPosts: number = await PostsModel.countDocuments(
      validateValue(filterValue, filterOption)
    );
    const totalPages: number = Math.ceil(totalPosts / pageSize); // Calculate total count of pages

    // Our algorithm of getting posts on database side.
    const data = await PostsModel
      // We filter by regexp if we get anything from req.query.filterValue. If no, we find all posts
      .find(validateValue(filterValue, filterOption))
      // Sort posts by sortOptions and orders
      .sort({ [sortOption]: sortOrder })
      // Pagination options
      .skip(startIndex)
      // Limit page
      .limit(pageSize)
      .exec();

    // All statistic information
    const info = {
      currentPage,
      totalPosts,
      pageSize,
      startIndex,
      totalPages,
    };

    // Return paginated posts to the client
    return res.json({
      message: 'Posts have been successfully found',
      data: { info, data },
    });
  } catch (error: any) {
    return res.json({ message: error.message, data: {} });
  }
};

export { getAllPosts };
