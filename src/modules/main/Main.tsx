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
import { EasyCommunication } from "./easy-communication/easy-communication";
import { Modifications_Mx210 } from "./modifications_Mx210/Modifications_Mx210";
import { Modifications_Mx110 } from "./modifications_Mx110/modifications_Mx110";
import {AdAkytec, AdAkytecBottom} from "./ad-akytec/ad-akytec";
import { TableComprasion } from "./module-comprasion-table/module-comprssion-table";
import { CustomCollapse } from "src/ui/custom-collapse/custom-collapse";

export const Main = () => {

  return (
    <ClientLayout>
     <ModuleAdAboutModBus  />
     <EasyCommunication/>
     <Mx210Opportunities/>
      <Mx210_restOpportunities/>
     <SwiperBlock/>
     <ModuleAdDeployment  />
     <Mx110Opportunities/>
    <Mx110_restOpportunities/>
      <Mx110_swiperBlock/> 
     <Application header="Applications"/>
     <AdAkytec/>
     <TableComprasion/>
     <Modifications_Mx210/>
     <Modifications_Mx110/>
     <AdAkytecBottom/>
     {/* <CustomCollapse/> */}
    </ClientLayout>
  );
};
