import React, {FC} from "react";
import classes from "./style/modificationCard.module.scss"
import Image from "next/image";


export const ModificationCard: FC<any> = (props) => {

const {info} = props;

const {AI, AO, DI, DO, certain_name, common_name, image, width, height} = info;


    return (<li className={classes.modificationCardBlock}>
        <Image alt="module" src={image} width={width} height={height}/>
        <header>{certain_name}</header>
        <div>{common_name}</div>
        <div>{DI && ` DI: ${DI}`}{DO && ` DO: ${DO}`}{AI && ` AI: ${AI}`}{AO && ` AO: ${AO}`}</div>
        <button>ADD TO CART</button>
    </li>)
}