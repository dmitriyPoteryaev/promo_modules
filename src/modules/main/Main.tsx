import React from "react";
import { ClientLayout } from "../../ui/client-layout/client-layout";
import {Mx210Opportunities} from "./mX210_opportunities/Mx210Opportunities";
import { Application } from "./application";
import { ModuleAd } from "./moduleAd";

export const Main = () => {
  return (
    <ClientLayout>
      <ModuleAd />
      <Mx210Opportunities/>
      <Application header="Applications"/>
    </ClientLayout>
  );
};
