import React from "react";

import { observer } from "mobx-react-lite";
import { basketStore } from "../../store/index";
import { getClasses } from './style/get-classes';
import Image from "next/image";
import classes from "./style/shopping-cart.module.scss";
import CounterMinus from '../icon2/CounterMinus';
import CounterPlus from '../icon2/CounterPlus';
import Trash from "../icon2/Trash"
import LeftIcon from '../icon2/LeftIcon'

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
                            <Image alt="module" src={image} width={width} height={height} />
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
           {ArrayWithAllOrderPositionStore.length !==0 && <div>
                <a target="_blank" href='https://akytec.de/media/wysiwyg/downloads/MX110/MV110-16D(DN)/MV110-16D(DN)_0294_EN.pdf'>Upon viewing the shopping cart, you will be directed to a page to fill out your information. After filling it out, we will contact you.</a>
                <button style={{backgroundColor: 'white', border: '1px solid #00A197', height: '55px', width: '100%', color:'#00A197', textAlign: 'center', marginTop: '19px' }}>CONTINUE SHOPPING</button>
                <button style={{border: '1px solid #00A197', height: '55px', width: '100%', color:'white', textAlign: 'center', backgroundColor: '#00A197', marginTop: '8px' }}>TO CHECK OUT</button>
            </div>}
        </div>
    </aside>)
})