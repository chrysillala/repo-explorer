import React from "react";
import { useFormQuery } from "@/hooks/useFormQuery";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Layout from "@/components/Layout";
import FormSearch from "@/components/Form/FormSearch";
import ListResult from "@/components/List/ListResult";

export default function Home() {
  const { handleLoading, handleSubmit, isLoading, query } = useFormQuery();

  return (
    <Layout>
      <Container
        maxWidth="md"
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FormSearch handleSubmit={handleSubmit} isLoading={isLoading} />
        {query.length > 0 && (
          <>
            <Typography
              color="text.secondary"
              gutterBottom
              data-testid="search-result-copy"
            >
              Showing users for &apos;{query}&apos;
            </Typography>
            <ListResult query={query} handleLoading={handleLoading} />
          </>
        )}
      </Container>
    </Layout>
  );
}
