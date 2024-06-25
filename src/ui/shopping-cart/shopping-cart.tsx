import React from "react";

import { observer } from "mobx-react-lite";
import { basketStore } from "../../store/index";
import { getClasses } from './style/get-classes';
import Image from "next/image";
import classes from "./style/shopping-cart.module.scss";
import CounterMinus from '../icon2/CounterMinus';
import CounterPlus from '../icon2/CounterPlus';
import Trash from "../icon2/Trash"

export const ShoppingCart = observer((props: any) => {

    const { changeVisibilityCart, isOpenCart} = props;

    const { decrement, increment, ArrayWithAllOrderPositionStore, deletePosition } =
        basketStore;

        const { cnContainerSideBar } = getClasses(isOpenCart);

        console.log(ArrayWithAllOrderPositionStore, ArrayWithAllOrderPositionStore.length);


    return (<aside className={cnContainerSideBar}>
        <header>Your shopping cart</header>
        <span>2 items in your cart</span>
        <div style={{ padding: "16px 60px 262px 60px", }}>
            <ul style={{ padding: "23px" }}>
                {ArrayWithAllOrderPositionStore.map((orderedModification) => {

                    const { AI, AO, DI, DO, certain_name, common_name, image, width, height, isOrdered, counter } = orderedModification;

                  return (<li key={certain_name} style={{ border: "1px solid black", marginBottom: "15px", width: "100%", height: "130px", display: 'flex', justifyContent: 'space-between', padding: '6px 110px 5px 6px', alignItems: 'center' }}>
                    <div style={{width: '20%', height: '100%'}}>
                    <Image alt="module" src={image} width={width} height={height} />
                    </div>
                    <div className={classes.modal_description}>
                        <div>{certain_name}</div>
                        <div>{common_name}</div>
                        <div>{DI && ` DI: ${DI}`}{DO && ` DO: ${DO}`}{AI && ` AI: ${AI}`}{AO && ` AO: ${AO}`}</div>
                    </div> 
                    <div style={{display: 'flex', alignItems: 'center', width: counter > 1 ? '90px' : '43px', justifyContent: 'space-between'}}>
                        {counter > 1 && <button onClick={()=> {decrement(orderedModification)}}><CounterMinus/></button>}
                        <span>{counter}</span>
                        <button onClick={()=> {increment(orderedModification)}}><CounterPlus/></button>
                    </div>
                    <button onClick={() => {deletePosition(orderedModification)}} style={{position: "absolute", right: '40px'}}><Trash/></button>

                </li>)

                })
                }
            </ul>
        </div>
    </aside>)
})