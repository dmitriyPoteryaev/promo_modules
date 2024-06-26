import React from "react";
import { ClientLayout } from "../../ui/client-layout/client-layout";
import {Mx210Opportunities} from "./mX210_opportunities/Mx210Opportunities";
import { Application } from "./application";
import { ModuleAdAboutModBus, ModuleAdDeployment } from "./moduleAd";
import {Mx210_restOpportunities} from "./mX210_restOpportunities";
import { Mx110Opportunities } from "./mX110_opportunities";
import { Mx110_restOpportunities } from "./mX110_restOpportunities";
import { Mx110_swiperBlock } from "./Mx110_swiperBlock";
import {SwiperBlock} from "./swiper-block/swiper-block";
import { Modifications_Mx210 } from "./modifications_Mx210/Modifications_Mx210";

export const Main = () => {

  return (
    <ClientLayout>
     <ModuleAdAboutModBus  />
     <Mx210Opportunities/>
      <Mx210_restOpportunities/>
     <SwiperBlock/>
     <ModuleAdDeployment  />
     <Mx110Opportunities/>
    <Mx110_restOpportunities/>
      <Mx110_swiperBlock/> 
     <Application header="Applications"/>
     <Modifications_Mx210/>
    </ClientLayout>
  );
};
