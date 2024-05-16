import React from "react";
import { ClientLayout } from "../../ui/client-layout/client-layout";
import { Application } from "./application";

export const Main = () => {
  return (
    <ClientLayout>
      <Application header="Applications"/>
    </ClientLayout>
  );
};
