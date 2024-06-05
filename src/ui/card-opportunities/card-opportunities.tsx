import React, {FC} from "react";
import classes from './styles/card-opportunities.module.scss';

export const CardOpportuinities: FC<any> = (props) => {

    const { description } = props;
    const {topInscription, bottomInscription, svg} = description;

    return <div className={classes.cardOpportuinities}>
        <div className={classes.cardOpportuinities_img}>{svg}</div>
        <span className={classes.cardOpportuinities_inscription}>{topInscription}</span>
        <span className={classes.cardOpportuinities_inscription}>{bottomInscription}</span>
    </div>
}