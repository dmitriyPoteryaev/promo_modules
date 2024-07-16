import React from "react";
import classes from "./styles/mX110_restOpportunities.module.scss";
import { CardOpportuinities } from "../../../ui/card-opportunities";
import {CardOpportuinitiesProps} from '../../../ui/card-opportunities/card-opportunities'

import Mx1103  from "../../../ui/icon2/Mx1103";
import Mx1104  from "../../../ui/icon2/Mx1104";
import Mx1105  from "../../../ui/icon2/Mx1105";
import SvgMx2102 from "../../../ui/icon2/Mx2102";
import SvgMx2106 from "../../../ui/icon2/Mx2106";
import SvgMx2108 from "../../../ui/icon2/Mx2108";

const cards: CardOpportuinitiesProps[] =
    [{ topInscription: "Auto protocol", bottomInscription: "detection", svg: <Mx1103/> },
    { topInscription: 'Pulse counter', bottomInscription: "function", svg: <Mx1104 /> },
    { topInscription: 'Inbuilt logic', bottomInscription: 'functions in MK110', svg: <Mx1105 /> },
    { topInscription: 'Free of charge', bottomInscription: 'configuration tool', svg: <SvgMx2106  /> },
    { topInscription: "Alarm", bottomInscription: "signals", svg: <SvgMx2102 /> },
    { topInscription: 'DIN-rail &', bottomInscription: "wall mounting", svg: <SvgMx2108 /> },];

export const Mx110_restOpportunities = () => {


    return (<section className={classes.mX210restOpportunities}>   
         <ul >
        {cards.map((card: CardOpportuinitiesProps) => {
            return (<li key={card.topInscription}><CardOpportuinities description={card} /></li>)
        })}
    </ul>
    </section>)
}