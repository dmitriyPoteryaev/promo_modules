
import React, {FC} from 'react';
import  {Button} from "../buttons/button/button"

import classes from "./styles/client-header.module.scss"; 



export const ClientHeader: FC = () => {

    return(
    <header className={classes.client_header}>
    <div className={classes.client_header_container}>
    <Button variant='magenta' size='medium'>REQUEST FOR QUOTE</Button>
    </div>
    </header>)

}