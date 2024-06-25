'use client';
import React, {FC} from "react";
import { getClasses } from './style/get-classes';
import Link from "next/link";

export interface ClientMobileMenuProps {
    changeVisibilityModal: Function;
    isOpenModal: boolean;
    Links: {href: string, name: string}[];
};

export const MobileMenu: FC<ClientMobileMenuProps> = (props) => {

    const {changeVisibilityModal, isOpenModal, Links} = props;

    const { cnContainerSideBar } = getClasses(isOpenModal);

    return (<aside className={cnContainerSideBar}>
         <nav>
            {Links.map(({href, name}: {href: string, name: string}) => {
                return (<Link key={name} href={href} onClick={() => { changeVisibilityModal((prevState) => !prevState) }}>{name}</Link>)
            })
            }
        </nav>
        </aside>)
}