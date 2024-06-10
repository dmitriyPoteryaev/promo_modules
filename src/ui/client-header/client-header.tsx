
import React, {FC} from 'react';
import  {Button} from "../buttons/button/button";
import {formAPI} from "../../api/query-to-form";


import classes from "./styles/client-header.module.scss"; 



export const ClientHeader: FC = () => {

    const {postInfoFromForm} = formAPI;

    return(
    <header className={classes.client_header} onClick={() => postInfoFromForm()}>
    <div className={classes.client_header_container}>
    <Button variant='magenta' size='medium'>REQUEST FOR QUOTE</Button>
    </div>
    </header>)

}