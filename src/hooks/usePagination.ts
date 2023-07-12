import { useState } from "react";

export const usePagination = (): PaginationHook => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setCurrentPage(value);
  };

  return {
    currentPage,
    handlePageChange,
  };
};
