'use client';

import React from "react";

import { observer } from "mobx-react-lite";
import { basketStore } from "../../store/index";
import { getClasses } from './style/get-classes';
import Image from "next/image";
import classes from "./style/shopping-cart.module.scss";
import CounterMinus from '../icon2/CounterMinus';
import CounterPlus from '../icon2/CounterPlus';
import Trash from "../icon2/Trash"
import LeftIcon from '../icon2/LeftIcon';
import Link from "next/link";

export const ShoppingCart = observer((props: any) => {

    const { changeVisibilityCart, isSideModals } = props;

    const { decrement, increment, ArrayWithAllOrderPositionStore, deletePosition } =
        basketStore;

    const { cnContainerSideBar } = getClasses(isSideModals.isOpenCart);

    const quantity_OrderedPositions = ArrayWithAllOrderPositionStore.length === 0 ? "no" : ArrayWithAllOrderPositionStore.length;


    return (<aside className={cnContainerSideBar}>
        <header>
        <button className={classes.modal_closeButton} onClick={() => { changeVisibilityCart({isOpenCart: false, isOpenModal: false})}}>
            <LeftIcon />
        </button>
         Your shopping cart</header>
        <div className={classes.modal_wrapperListOrderedItems} onClick={(event) => event.stopPropagation()}>
        <div className={classes.modal_quantityOrderedPosition}>{quantity_OrderedPositions} items in your cart</div>
            <ul >
                {ArrayWithAllOrderPositionStore.map((orderedModification) => {

                    const { AI, AO, DI, DO, certain_name, common_name, image, width, height, isOrdered, counter } = orderedModification;

                    return (<li key={certain_name}>
                        <div className={classes.modal_img}>
                            <Image alt="module" src={image} width={100} height={100} />
                        </div>
                        <div className={classes.modal_description}>
                            <div>{certain_name}</div>
                            <div>{common_name}</div>
                            <div>{DI && ` DI: ${DI}`}{DO && ` DO: ${DO}`}{AI && ` AI: ${AI}`}{AO && ` AO: ${AO}`}</div>
                        </div>
                        <div className={classes.modal_counter} style={{width: counter > 1 ? '90px' : '43px'}}>
                            {counter > 1 && <button onClick={() => { decrement(orderedModification) }}><CounterMinus /></button>}
                            <span>{counter}</span>
                            <button onClick={() => { increment(orderedModification) }}><CounterPlus /></button>
                        </div>
                        <button className={classes.modal_trashButton} onClick={() => { deletePosition(orderedModification) }}><Trash /></button>

                    </li>)

                })
                }
            </ul>
           {ArrayWithAllOrderPositionStore.length !==0 && <div >
                <span className={classes.modal_notification}>Upon viewing the shopping cart, you will be directed to a page to fill out your information. After filling it out, we will contact you.</span>
                <button className={classes.modal_continueShoppingButton}  onClick={() => { changeVisibilityCart({isOpenCart: false, isOpenModal: false})}}>CONTINUE SHOPPING</button>
                <Link href='/form'><button className={classes.modal_checkoutButton}>CHECKOUT</button></Link>
            </div>}
        </div>
    </aside>)
})