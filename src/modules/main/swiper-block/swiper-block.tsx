import React from "react";
import { CustomSwiper } from "../../../ui/custom-swiper/custom-swiper";
import classes from "./style/swiper-block.module.scss";


export const SwiperBlock = () => {
    const pngsProtocolsMx210 = [
        require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_1.png"),
        require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_2.png"),
        require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_3.png"),
        require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_4.png"),
        require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_5.png"), ];

    return (
       <section className={classes.swiper_block}>
        <article></article>
        <div style={{ maxWidth: '620px', width: '100%' }}>
        <CustomSwiper arrayWithPng={pngsProtocolsMx210}/>
        </div>
       </section>)

}