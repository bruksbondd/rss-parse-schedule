import { Paginator } from "primereact/paginator";
import { useDispatch } from "react-redux";
import type { PaginatorCurrentPageReportOptions } from "primereact/paginator";
import { FC } from "react";
import { setCurrentPage } from "src/features/Posts/PostsCRUD";
import { useState } from "react";
import type {
  HandlePageChange,
  NativePaginatorProps,
} from "lib/interfaces/NativePaginator";

// Template for customizing the layout of the Paginator component
const template = {
  layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
  CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
    return (
      <span
        style={{
          color: "var(--text-color)",
          userSelect: "none",
          width: "120px",
          textAlign: "center",
        }}
      >
        {options.first} - {options.last} of {options.totalRecords}
      </span>
    );
  },
};

const NativePaginator: FC<NativePaginatorProps> = ({
  startIndex,
  pageSize,
  totalPosts,
  className,
}) => {
  const dispatch = useDispatch();
  const [first, setFirst] = useState(startIndex);
  const handlePageChange: HandlePageChange = (e) => {
    dispatch(setCurrentPage(e.page + 1));
    setFirst(e.first);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Paginator
      template={template}
      first={first}
      rows={pageSize}
      totalRecords={totalPosts}
      onPageChange={(e) => handlePageChange(e)}
      className={className}
    />
  );
};

export default NativePaginator;
