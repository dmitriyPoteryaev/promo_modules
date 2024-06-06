import React, {FC, ReactNode} from "react";
import classes from './styles/card-opportunities.module.scss';
import { getClasses } from './styles/get-classes';

export interface CardOpportuinitiesProps  {
    topInscription: string;
    bottomInscription: string;
    svg: ReactNode;
    variant?: string;
  }

export const CardOpportuinities: FC<{description: CardOpportuinitiesProps}> = (props) => {

    const { description } = props;
    const {topInscription, bottomInscription, svg, variant='default'} = description;


    const { cnCardOpportuinitiesInscription } = getClasses({
        variant,
      });
    

    return <div className={classes.cardOpportuinities}>
        <div className={classes.cardOpportuinities_img}>{svg}</div>
        <span className={cnCardOpportuinitiesInscription}>{topInscription}</span>
        <span className={cnCardOpportuinitiesInscription}>{bottomInscription}</span>
    </div>
}