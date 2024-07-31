import React, {FC} from "react";
import classes from "./style/modificationCard.module.scss"
import Image from "next/image";
import { getClasses } from './style/get-classes';
import Pdf from '../icon2/Pdf';
import Link from "next/link";

export const ModificationCard: FC<any> = (props) => {

const {info, ChangeArrayWithAllOrderPosition} = props;

const {AI, AO, DI, DO, certain_name, common_name, image, width, height, isOrdered, href, unAppproprietedSize} = info;

const {cnContainerNotification, cnContainerButton} = getClasses({
    isOrdered,
  });


    return (<li className={classes.modificationCardBlock}>
        <span className={cnContainerNotification}>ADDED TO CART</span>
        <Image style={{ position: unAppproprietedSize ? 'absolute' : 'unset', top: unAppproprietedSize ? '0px' : 'unset',  }} alt="module" src={image} width={width} height={height}/>
        <header>{certain_name}</header>
        <div>{common_name}</div>
        <div>{DI && ` DI: ${DI}`}{DO && ` DO: ${DO}`}{AI && ` AI: ${AI}`}{AO && ` AO: ${AO}`}</div>
        <Link target="_blank" href={href}><Pdf style={{position: 'absolute', right: '15px', bottom: '90px'}}/></Link>
        <button className={cnContainerButton}  onClick={() =>{ChangeArrayWithAllOrderPosition(info)}}>{isOrdered ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </li>)
}