'use client';
import React, {FC} from "react";
import classes from "./style/mobile-modal-menu.module.scss";
import Link from "next/link";

export interface ClientMobileMenuProps {
    changeVisibilityModal: Function;
}

;

const Links: {href: string, name: string}[] = [

    {
        href: "/#Mx210",
        name: "MX210 Modules",

    },
    {
        href: "/#Mx110",
        name: "MX110 Modules",

    },
    {
        href: "/#applications",
        name: "Mx Modifications",

    },
    {
        href: "/",
        name: "More Info",

    },

]
export const MobileMenu: FC<ClientMobileMenuProps> = (props) => {

    const {changeVisibilityModal} = props

    return (<aside className={classes.modal}>
         <nav>
            {Links.map(({href, name}: {href: string, name: string}) => {

                return (<Link key={href} href={href} onClick={() => { changeVisibilityModal((prevState) => !prevState) }}>{name}</Link>)
            })
            }
        </nav>
        </aside>)
}