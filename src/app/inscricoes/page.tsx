"use client"

import { ListAllSubscribe } from "./list-all-subscribes";
import { ApolloClientProvider } from "@/lib/apollo";

export default () => {
  return(
    <div className="p-5 md:py-7 md:px-8">
      <ApolloClientProvider>
        <ListAllSubscribe/>
      </ApolloClientProvider>
    </div>
  );
}