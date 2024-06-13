import React, { FC } from "react";
import classes from "./styles/Mx110opportunities.module.scss";
import SvgMx210427321481 from "../../../ui/icon2/Mx210427321481";
import SvgMx210427321717 from "../../../ui/icon2/Mx210427321717";
import SvgMx110427321542 from "../../../ui/icon2/Mx110427321542";
import SvgMx110427321769 from "../../../ui/icon2/Mx110427321769";
import { CardOpportuinities } from "../../../ui/card-opportunities/card-opportunities";

const Mx110Photo = require("../../../assets/png/main/Oppotunities/Mx110/Mx110.png");

const cards =
    [{ topInscription: "Modbus RTU,", bottomInscription: "ASCII", svg: <SvgMx210427321481/> },
     { topInscription: 'Galvanic',bottomInscription: "isolation", svg: <SvgMx110427321769/>}, 
     {topInscription: 'Diagnostics of', bottomInscription: 'network status', svg: <SvgMx110427321542/>}, 
     {topInscription:'Up to 32DI / 32DO', bottomInscription:'Up to 8AI / 8AO', svg: <SvgMx210427321717/>, path: "path"}];


export const Mx110Opportunities: FC = () => {

    return <section className={classes.Mx110opportunities}>
        <div className={classes.Mx110opportunities_line}>Mx110</div>
        <div className={classes.Mx110opportunities_fullInfo}>
             <div className={classes.Mx110opportunities_wrapperList}>
                <div style={{width: "100%", display: "flex"}}>
                <ul className={classes.Mx110opportunities_listOpportunities}>
                    {cards.map((card: any) => {
                        return (<li key={card.topInscription}><CardOpportuinities description={card}/></li>)
                    })}
                </ul>
                </div>
            </div> 
             <div className={classes.Mx110opportunities_wrapperImg}>
             <img className={classes.Mx110opportunities_imgModule} src={Mx110Photo} alt="Mx210" />
             <div>Compatibility with third-party PLCs</div>
             </div>
         
        </div>
    </section>
}