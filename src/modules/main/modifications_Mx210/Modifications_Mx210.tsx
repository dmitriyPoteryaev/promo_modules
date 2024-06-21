'use client';
import React from "react";
import classes from './style/modifications_mx210.module.scss';
import * as  modulesInfo from './modulesInfo.json';
import { ModificationCard } from "src/ui/modification-card/modification-card";

export const Modifications_Mx210 = () => {

    return (<section className={classes.moidificationBlock}>
      <ul>
        {modulesInfo.modules.map((infoAboutModule) => {
           
           return(<ModificationCard key={infoAboutModule.certain_name} info={infoAboutModule}/>)


        })

        }
      
      </ul></section>)


}