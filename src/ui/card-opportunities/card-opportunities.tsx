import React, {FC, ReactNode} from "react";
import classes from './styles/card-opportunities.module.scss';
import { getClasses } from './styles/get-classes';

export interface CardOpportuinitiesProps  {
    topInscription: string;
    bottomInscription: string;
    svg: ReactNode;
    variant?: string;
    path?: string;
  }

export const CardOpportuinities: FC<{description: CardOpportuinitiesProps}> = (props) => {

    const { description } = props;
    const {topInscription, bottomInscription, svg, variant='default', path='default'} = description;


    const { cnCardOpportuinitiesInscription, cnCardOpportuinities  } = getClasses({
        variant,
        path,
      });
    

    return <div className={cnCardOpportuinities}>
        <div className={classes.cardOpportuinities_img}>{svg}</div>
        <span className={cnCardOpportuinitiesInscription}>{topInscription}</span>
        <span className={cnCardOpportuinitiesInscription}>{bottomInscription}</span>
    </div>
}