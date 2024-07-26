'use client'
import React, {useState} from "react";
import classes from './styles/models-specs.module.scss';
import { ClientLayout } from "../../ui/client-layout/client-layout";
import {BlockEquipmentDescription} from "../../ui/block-equipment-description/block-equipment-description"
import * as  moduleInfo from './module.json';
import { basketStore } from "../../store/index";
import { observer } from "mobx-react-lite";
 

export const  ModelsSpecs = observer(() => {

    
  const { ChangeArrayWithAllOrderPosition, ArrayWithAllOrderPositionStore } =
  basketStore;

    const equipmentInfo = [

        {
            name: "Mx210",
            blockName: "Mx210 with Ethernet",
            img: '/png/main/Oppotunities/Mx210/Mx210.png',
            width: 154.03,
            height: 154.03,
            FullDescription: moduleInfo["Mx210"],

        },
        {
            name: "Mx110",
            blockName: "Mx110 with RS485",
            img: '/png/main/Oppotunities/Mx110/Mx110.png',
            width: 166.48,
            height: 157.49,
            FullDescription: moduleInfo["Mx110"],
        },
        {
            name: "akytec Tool Pro",
            blockName: "akytec Tool Pro",
            img: '/png/main/Oppotunities/Tool-pro/akYtec-Tool-Pro.png',
            width: 168.41,
            height: 168.41,
            FullDescription: "",
        },
    ]

    const [visonEquipment, setVisonEquipment] = useState({
        Mx210: true,
        Mx110: true,
        "akytec Tool Pro": true,
    })


    return(
        <ClientLayout>
    <section className={classes.modelSpecsBlock}>
        <header className={classes.modelSpecsBlock_header}>Models and specs</header>
        <div style={{marginTop: '49px'}}>
        {Object.values(equipmentInfo).map((equipment) => {

       return(<BlockEquipmentDescription ArrayWithAllOrderPositionStore={ArrayWithAllOrderPositionStore} ChangeArrayWithAllOrderPosition={ChangeArrayWithAllOrderPosition} equipment={equipment} visonEquipment={visonEquipment} setVisonEquipment={setVisonEquipment}/> )
        })}

        </div>

    </section>
    </ClientLayout>)

})