"use client"

import { Login } from "./login";
import { ListAllSubscribe } from "./list-all-subscribes";
import { ApolloClientProvider } from "@/lib/apollo";

export default () => {
  
  const isAuthenticated = localStorage.getItem("user_acess");

  if(!isAuthenticated) {
    return <Login/>
  }

  return(
    <div className="p-5 md:py-7 md:px-8">
      <ApolloClientProvider>
        <ListAllSubscribe/>
      </ApolloClientProvider>
    </div>
  );
}