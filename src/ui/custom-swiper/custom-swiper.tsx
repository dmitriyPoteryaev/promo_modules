'use client';
import React, { FC, CSSProperties, useState, useRef } from "react";

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from "./style/custom-swiper.module.scss";

import 'swiper/css';
import 'swiper/css/thumbs';
import SwiperClass from "swiper/types/swiper-class";
import Image from "next/image";

export interface CustomSwiperProps {
    arrayWithPng: string[];
}

export const CustomSwiper: FC<CustomSwiperProps> = (props) => {

    const { arrayWithPng } = props;

    const swiperRef = useRef<any>();

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    return (
        <div className={classes.custom_swiper}>
            <Swiper
                onSwiper={(swiper: any) => {
                    swiperRef.current = swiper;
                }}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as CSSProperties}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs]}
                className={classes.swiper_up}
            >
                {arrayWithPng.map((urlPng: string) =>
                    <SwiperSlide key={urlPng} className={classes.swiper_big}>
                        <Image width={519} height={422} src={urlPng} alt="" />
                    </SwiperSlide>)
                }
            </Swiper>
            <div className={classes.wrappre_arrow}>
                <button className={classes.arrow__left} onClick={() => swiperRef.current.slidePrev()}>
                </button>
                <button className={classes.arrow__right} onClick={() => swiperRef.current.slideNext()}>
                </button>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                className={classes.swiper_bottom}>
                {arrayWithPng.map((urlPng: string, i: number) => {
                    if (i !== 3) {
                        return (<SwiperSlide key={urlPng} className={classes.swiper_small}>
                            <Image width={140} height={100} src={urlPng} alt="" />
                        </SwiperSlide>)

                    } else {
                        return (<SwiperSlide key={urlPng} className={classes.swiper_small_another}>
                            <Image width={140} height={100} src={urlPng} alt="" />
                        </SwiperSlide>)

                    }

                }

                )
                }
            </Swiper>
        </div>)
}