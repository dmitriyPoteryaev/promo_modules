'use client';
import React, {FC} from "react";
import { getClasses } from './style/get-classes';
import Link from "next/link";

export interface ClientMobileMenuProps {
    changeVisibilityModal: Function;
    isSideModals: any;
    Links: {href: string, name: string}[];
};

export const MobileMenu: FC<ClientMobileMenuProps> = (props) => {

    const {changeVisibilityModal, isSideModals, Links} = props;

    const { cnContainerSideBar } = getClasses(isSideModals.isOpenModal);

    return (<aside className={cnContainerSideBar}>
         <nav>
            {Links.map(({href, name}: {href: string, name: string}) => {
                return (<Link key={name} href={href} onClick={() => { changeVisibilityModal({isOpenCart: false, isOpenModal: false}) }}>{name}</Link>)
            })
            }
        </nav>
        </aside>)
}