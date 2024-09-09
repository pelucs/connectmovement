"use client"

import { SubscribeForAdmins } from "@/components/subscribe-for-admins";
import { ApolloClientProvider } from "@/lib/apollo";

export default () => {
  return(
    <div className="w-full min-h-screen pt-5 flex items-center justify-center">
      <ApolloClientProvider>
        <SubscribeForAdmins/>
      </ApolloClientProvider>
    </div>
  );
}