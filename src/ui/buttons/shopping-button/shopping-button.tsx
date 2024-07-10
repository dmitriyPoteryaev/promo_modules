import React from "react";
import { Button} from "../button/button";
import SvgBasket from "src/ui/icon2/Basket";


export const ShoppingButton = (props) => {
    const {changeVisibilityModal, isEmptyBasket} = props;

    return (<Button 
        onClick={() => { changeVisibilityModal((prevState) => { return { isOpenCart: !prevState.isOpenCart, isOpenModal: false } }) }} 
        variant='magenta' 
        size='small'><span>SHOPING CART</span> {isEmptyBasket && <SvgBasket style={{marginLeft: '7px'}} />}
        </Button>)

}