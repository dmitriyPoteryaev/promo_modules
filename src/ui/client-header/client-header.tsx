'use client';

import React, { FC } from 'react';
import { Button } from "../buttons/button/button";
import { formAPI } from "../../api/query-to-form";
import Logo from "../icon2/Logo";
import Link from 'next/link';

import classes from "./styles/client-header.module.scss";

export interface ClientHeaderProps {
    changeVisibilityModal: Function;
    Links: {href: string, name: string}[];
}

export const ClientHeader: FC<ClientHeaderProps> = (props) => {

    const { postInfoFromForm } = formAPI;

    const { changeVisibilityModal, Links } = props;

    // onClick={()=> { postInfoFromForm()}}
    return (
        <header className={classes.client_header}>
            <div className={classes.client_header_container}>
                <div>
                <button className={classes.client_header_modalButton} onClick={() => { changeVisibilityModal((prevState) => !prevState) }}>
                    <div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </button> 
                    <Logo />
                    <nav>
                        {Links.map(({href, name}: {href: string, name: string}) => {
                         return(<Link href={href}>{name}</Link>)
                        })}
                    </nav>
                </div>
                <div>
                    <Link href={"/"}>More Info</Link>
                    <Button variant='magenta' size='medium'>Basket</Button>
                </div> 
            </div>
        </header>)

}