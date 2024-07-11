import React from "react";
import classes from "./styles/mX210_restOpportunities.module.scss";
import { CardOpportuinities } from "../../../ui/card-opportunities";
import {CardOpportuinitiesProps} from '../../../ui/card-opportunities/card-opportunities'

import SvgMx2101 from "../../../ui/icon2/Mx2101";
import SvgMx2102 from "../../../ui/icon2/Mx2102";
import SvgMx2103 from "../../../ui/icon2/Mx2103";
import SvgMx2104 from "../../../ui/icon2/Mx2104";
import SvgMx2105 from "../../../ui/icon2/Mx2105";
import SvgMx2106 from "../../../ui/icon2/Mx2106";

const cards: CardOpportuinitiesProps[] =
    [{ topInscription: "Wide operating", bottomInscription: "temperature range", svg: <SvgMx2101 /> },
    { topInscription: 'Alarm', bottomInscription: "signals", svg: <SvgMx2102 /> },
    { topInscription: 'Group', bottomInscription: 'configuration', svg: <SvgMx2103 /> },
    { topInscription: 'Fast DO up to 400 Hz', bottomInscription: 'Fast DI up to 60 kHz', svg: <SvgMx2104 />, variant: "small" },
    { topInscription: "Real-time ", bottomInscription: "clock", svg: <SvgMx2105 /> },
    { topInscription: 'Free of charge', bottomInscription: "configuration tool", svg: <SvgMx2106 /> },];

export const Mx210_restOpportunities = () => {


    return (<section className={classes.mX210restOpportunities}>   
         <ul >
        {cards.map((card: CardOpportuinitiesProps) => {
            return (<li key={card.topInscription}><CardOpportuinities description={card} /></li>)
        })}
    </ul>
    </section>)
}