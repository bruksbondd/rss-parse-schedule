import type { PaginatorPageChangeEvent } from "primereact/paginator";

export type StartIndex = number;
export type PageSize = number;
export type TotalPosts = number;
export type HandlePageChange = (e: PaginatorPageChangeEvent) => void;

export interface NativePaginatorProps {
  startIndex: StartIndex;
  pageSize: PageSize;
  totalPosts: TotalPosts;
  className: string;
}
