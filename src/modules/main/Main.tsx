import React from "react";
import { ClientLayout } from "../../ui/client-layout/client-layout";
import {Mx210Opportunities} from "./mX210_opportunities/Mx210Opportunities";
import { Application } from "./application";
import { ModuleAd } from "./moduleAd";
import {Mx210_restOpportunities} from "./mX210_restOpportunities";
import {SwiperBlock} from "./swiper-block/swiper-block"

export const Main = () => {

  return (
    <ClientLayout>
     <ModuleAd  />
     <Mx210Opportunities/>
     <Mx210_restOpportunities/>
     <SwiperBlock/>
     <Application header="Applications"/>
    </ClientLayout>
  );
};
