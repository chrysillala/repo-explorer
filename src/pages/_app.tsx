import { useState } from "react";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PaginationProvider } from "@/hooks/usePagination";

export default function App({ Component, pageProps }: AppProps) {
  // https://tanstack.com/query/v4/docs/react/guides/ssr#using-hydration
  // Create the QueryClient in React state to support caching queries on the server and set up hydration
  // This ensures that data is not shared between different users and requests,
  // while still only creating the QueryClient once per component lifecycle.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <PaginationProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}></Hydrate>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </PaginationProvider>
  );
}
