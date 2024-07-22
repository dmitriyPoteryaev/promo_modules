import React from "react";
import classes from './styles/models-specs.module.scss';
import { ClientLayout } from "../../ui/client-layout/client-layout";
import {BlockEquipmentDescription} from "../../ui/block-equipment-description/block-equipment-description"


export const  ModelsSpecs = () => {

    const equipmentInfo = [

        {
            name: "Mx210",
            img: '/png/main/Oppotunities/Mx210/Mx210.png',
            width: 154.03,
            height: 154.03,
        },
        {
            name: "Mx110",
            img: '/png/main/Oppotunities/Mx110/Mx110.png',
            width: 166.48,
            height: 157.49,
        },
        {
            name: "akytec Tool Pro",
            img: '/png/main/Oppotunities/Tool-pro/akYtec-Tool-Pro.png',
            width: 168.41,
            height: 168.41,
        },
    ]
     

    return(
        <ClientLayout>
    <section className={classes.modelSpecsBlock}>
        <header className={classes.modelSpecsBlock_header}>Models & specs</header>
        <ul>
        {equipmentInfo.map((equipment) => {

       return(<BlockEquipmentDescription equipment={equipment}/> )
        })}

        </ul>

    </section>
    </ClientLayout>)

}