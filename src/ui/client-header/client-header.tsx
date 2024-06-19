'use client';

import React, { FC } from 'react';
import { Button } from "../buttons/button/button";
import { formAPI } from "../../api/query-to-form";
import Logo from "../icon2/Logo";
import Link from 'next/link';

import classes from "./styles/client-header.module.scss";

export interface ClientHeaderProps {
    changeVisibilityModal: Function;
}

export const ClientHeader: FC<ClientHeaderProps> = (props) => {

    const { postInfoFromForm } = formAPI;

    const { changeVisibilityModal } = props;

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
                        <Link href={"/#Mx210"}>Mx210</Link>
                        <Link  href={"/#Mx110"}>Mx110</Link>
                        <Link href={"/#applications"}>Applications</Link>
                        <Link href={"/"}>Mx Modifications</Link>
                    </nav>
                </div>
                <div>
                    <div>More Info</div>
                    <Button variant='magenta' size='medium'>Basket</Button>
                </div> 
            </div>
        </header>)

}