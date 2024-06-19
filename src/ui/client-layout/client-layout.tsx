'use client';
import { ReactNode, FC, useState } from "react";
import { ClientHeader } from "../client-header/client-header";
import { ClientFooter } from "../client-footer/client-footer";
import { MobileMenu } from "../mobile-modal-menu/mobile-modal-menu";
import classes from "./styles/client-layout.module.scss";

interface ClientLayoutProps {
  children?: ReactNode;
}

export const ClientLayout: FC<ClientLayoutProps> = (props) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const { children } = props;

  const Links: { href: string, name: string }[] = [

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
      name: "Applications",

    },
    {
      href: "/",
      name: "Mx Modifications",

    },
    {
      href: "/",
      name: "More Info",

    },

  ]


  const headerLinks: { href: string, name: string }[] = [

    {
      href: "/#Mx210",
      name: "MX210",

    },
    {
      href: "/#Mx110",
      name: "MX110",

    },
    {
      href: "/#applications",
      name: "Applications",

    },

  ];

  return (
    <div className={classes.layout_client}>
      <ClientHeader changeVisibilityModal={setOpenModal} Links={headerLinks} />
      <MobileMenu isOpenModal={isOpenModal} changeVisibilityModal={setOpenModal} Links={Links} />
      <main className={classes.layout_client_container}>{children}</main>
      <ClientFooter />
    </div>
  );
};
