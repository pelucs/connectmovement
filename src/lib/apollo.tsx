import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: "https://sa-east-1.cdn.hygraph.com/content/clz7h30xq066o07ujcn9dje8d/master",
  cache: new InMemoryCache(),
});

interface ApolloClientProviderProps {
  children: ReactNode;
}

export const ApolloClientProvider = ({ children }: ApolloClientProviderProps) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}