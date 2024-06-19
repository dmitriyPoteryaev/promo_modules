'use client';
import { ReactNode, FC, useState } from "react";
import { ClientHeader } from "../client-header/client-header";
import { ClientFooter } from "../client-footer/client-footer";
import { MobileMenu } from "../mobile-modal-menu/mobile-modal-menu";
import classes from "./styles/client-layout.module.scss";

interface ClientLayoutProps {
  children?: ReactNode;
}

export const ClientLayout : FC<ClientLayoutProps> = (props) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const { children } = props;

  return (
    <div className={classes.layout_client}>
      <ClientHeader changeVisibilityModal={setOpenModal}/>
       {isOpenModal && <MobileMenu/>}
        <main className={classes.layout_client_container}>{children}</main>
        <ClientFooter />
    </div>
  );
};
