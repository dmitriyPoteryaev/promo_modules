
import React, {FC} from 'react';
import  {RequestButton} from "../buttons/request-button/request-button"

import classes from "./styles/client-header.module.scss"; 



export const ClientHeader: FC<any> = (props) => {

    return(
    <header className={classes.client_header}>
    <div className={classes.client_header_container}>
      <div className={classes.nav_toggle}>
      </div>
    <RequestButton>REQUEST FOR QUOTE</RequestButton>
    </div>
    </header>)

}