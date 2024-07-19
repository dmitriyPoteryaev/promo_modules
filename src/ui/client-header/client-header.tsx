'use client';

import React, { FC } from 'react';
import { observer } from "mobx-react-lite";
import { basketStore } from "../../store/index";
import Logo from "../icon2/Logo";
import Link from 'next/link';
import { ShoppingButton } from '../buttons/shopping-button/shopping-button';

import classes from "./styles/client-header.module.scss";

export interface ClientHeaderProps {
    changeVisibilityModal: Function;
    Links: { href: string, name: string }[];
}

export const ClientHeader: FC<ClientHeaderProps> = observer((props) => {

    
    const {ArrayWithAllOrderPositionStore } =
        basketStore;

    const { changeVisibilityModal, Links } = props;

  const   isEmptyBasket = ArrayWithAllOrderPositionStore.length !== 0;

    return (
        <header className={classes.client_header} onClick={(event) => event.stopPropagation()}>
            <div className={classes.client_header_container}>
                <div>
                    <button className={classes.client_header_modalButton} onClick={() => { changeVisibilityModal((prevState) => { return { isOpenCart: false, isOpenModal: !prevState.isOpenModal } }) }}>
                        <div>
                            <div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </button>
                    <Link target="_blank" href={"/https://akytec.de/en/"}> <Logo /></Link>
                    <nav>
                        {Links.map(({ href, name }: { href: string, name: string }) => {
                            return (<Link key={name} href={href}>{name}</Link>)
                        })}
                    </nav>
                </div>
                <div>
                    <Link href={"/"}>More Info</Link>
                    <ShoppingButton
                        changeVisibilityModal={changeVisibilityModal}
                        isEmptyBasket={isEmptyBasket}
                    />
                </div>
            </div>
        </header>)

})