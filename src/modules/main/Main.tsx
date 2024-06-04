import React from "react";
import { ClientLayout } from "../../ui/client-layout/client-layout";
import { Application } from "./application";
import { ModuleAd } from "./moduleAd";

export const Main = () => {
  return (
    <ClientLayout>
      <ModuleAd />
      <Application header="Applications"/>
    </ClientLayout>
  );
};
