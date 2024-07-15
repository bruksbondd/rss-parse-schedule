import type { Dispatch } from "@reduxjs/toolkit";
import { PostsCurrentPage, PostsStartIndex } from "lib/interfaces/postsCRUD";

export type SortOptionLabel = string;
export type SortOptionValue = string;
export type FilterOptionName = string;
export type FilterOptionValue = string;
export type SelectedSortKey = string;
export type SelectedSortOrder = 1 | -1 | null | undefined;
export type SelectedSortField = string;
export type SelectedFilterKey = string;
export type SelectedFilterValue = string;
export type SortChangeValue = string;
export type HandleAddButton = () => void;
export type HandleRemoveButton = () => Promise<void>;
export type HandleEditButton = () => Promise<void>;
export type RenderPosts = (
  changeFlag: boolean,
  queryParams: string,
  dispatch: Dispatch
) => Promise<void>;
export type BuildURI = (
  dispatch: Dispatch,
  currentPage: PostsCurrentPage,
  sortField: SelectedSortField,
  sortOrder: SelectedSortOrder,
  filterKey: SelectedFilterKey,
  filterValue: SelectedFilterValue
) => void;

export interface SortOption {
  label: SortOptionLabel;
  value: SortOptionValue;
}
export interface FilterOption {
  name: FilterOptionName;
  value: FilterOptionValue;
}
export interface SelectedOptions {
  sortKey: SelectedSortKey;
  sortOrder: SelectedSortOrder;
  sortField: SelectedSortField;
  filterKey: SelectedFilterKey;
  filterValue: SelectedFilterValue;
}

// Interface for defining the state shape
export interface PostsView {
  sortOptions: SortOption[];
  filterOptions: FilterOption[];
  selected: SelectedOptions;
}
