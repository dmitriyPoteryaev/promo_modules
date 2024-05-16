
import React, {FC} from 'react';
import  {Button} from "../buttons/button/button"

import classes from "./styles/client-header.module.scss"; 



export const ClientHeader: FC = (props) => {

    return(
    <header className={classes.client_header}>
    <div className={classes.client_header_container}>
      <div className={classes.nav_toggle}>
      </div>
    <Button variant='teal' size='small'>REQUEST FOR QUOTE</Button>
    </div>
    </header>)

}