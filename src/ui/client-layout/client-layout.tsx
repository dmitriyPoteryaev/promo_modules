import { ReactNode, FC } from "react";
import { ClientHeader } from "../client-header/client-header";
import classes from "./styles/client-layout.module.scss";

interface ClientLayoutProps {
  children?: ReactNode;
}

export const ClientLayout : FC<ClientLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={classes.layout_client}>
      <ClientHeader />
        <main className={classes.layout_client_container}>{children}</main>
    </div>
  );
};
