import React from "react";
import classes from "./styles/block-equipment-description.scss";
import Image from "next/image";

export const BlockEquipmentDescription = (props) => {

const {equipment} = props;

const  {name, img, width, height} = equipment;

    return (<li className={classes.equipmentBlock}>
       <div style={{borderRight: '1px solid #DEDEDE', maxWidth: '185px', width: '100%'}}><Image width={width} height={height} src={img} alt=''/></div> 
       
        
    </li>)
}