import React from "react";
import { useQuery } from "@tanstack/react-query";
import { usePagination } from "@/hooks/usePagination";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import ListItem from "@/components/List/ListItem";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

import { searchUsersByQuery } from "@/utils/api";
import { PER_PAGE, GH_API_SEARCH_RESULT_LIMIT } from "@/constants";

interface IListResults {
  query: string;
  handleLoading: (e: boolean) => void;
}

const ListResult = ({ query }: IListResults) => {
  const { currentPage, handlePageChange } = usePagination();
  const { data, status, error } = useQuery<SearchUsersResponse, Error>({
    queryKey: [query, currentPage],
    queryFn: () => searchUsersByQuery(query.toLowerCase(), currentPage),
  });

  const result = data?.data.items;

  const totalCount = data && data?.data.total_count;
  const totalPages =
    totalCount &&
    (totalCount > GH_API_SEARCH_RESULT_LIMIT
      ? Math.ceil(GH_API_SEARCH_RESULT_LIMIT / PER_PAGE)
      : Math.ceil(totalCount / PER_PAGE));

  if (status === "error") return <Error message={error?.message} />;
  if (status === "loading") return <Loading />;

  return (
    <>
      <div>
        {result && result.length === 0 ? (
          <p>no user found</p>
        ) : (
          result?.map((item) => (
            <Accordion key={item.node_id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`content-${item.node_id}`}
                id={`header-${item.node_id}`}
              >
                <Typography>{item.login}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pl: 3 }}>
                <ListItem username={item.login} />
                <Link
                  href={`https://github.com/${item.login}?tab=repositories`}
                  target="_blank"
                >
                  More repos from {item.login}
                </Link>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </div>

      {totalPages !== 0 && (
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="small"
          />
        </Box>
      )}
    </>
  );
};

export default ListResult;
