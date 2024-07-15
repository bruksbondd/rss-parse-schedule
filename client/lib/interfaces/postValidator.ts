export type PostCreator = string;
export type PostTitle = string;
export type PostLink = string;
export type PostPubDate = string;
export type PostDcCreator = string;
export type PostContent = string;
export type PostContentSnippet = string;
export type PostGuid = string;
export type PostCategory = string;
export type PostCategories = PostCategory[];
export type PostIsoDate = string;
export type StringDate = string;

export type ValidateModalCategories = (array: PostCategories) => PostCategory;
export type ValidateModalDate = (
  date: PostPubDate | PostIsoDate
) => Date | StringDate;
export type ValidateModalInput = (data: string) => string;

export interface Post {
  creator: PostCreator;
  title: PostTitle;
  link: PostLink;
  pubDate: PostPubDate;
  "dc:creator": PostDcCreator;
  content: PostContent;
  contentSnippet: PostContentSnippet;
  guid: PostGuid;
  categories: PostCategories;
  isoDate: PostIsoDate;
}
