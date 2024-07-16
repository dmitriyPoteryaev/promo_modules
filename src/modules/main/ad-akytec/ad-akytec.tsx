import React from "react";
import classes from "./styles/ad_akytec.module.scss";
import { Button } from "src/ui/buttons/button/button";
import Link from "next/link";
import Image from "next/image";

export const AdAkytec = () => {

    return(    <section className={classes.akytecAd} >
        <div  className={classes.akytecAd_img}>
        <img src={'/png/main/Ad/moduleAd_easy.png'}  style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{margin: 'auto', maxWidth: '1202px', width: '100%', display: 'flex'}}>
            <div style={{width: '47%'}}>
        <header className={classes.akytecAd_title}>Looking for even more quality items for your projects?</header>
        <div style={{marginBottom: '69px'}}>
        <Link href='https://akytec.de/en/'>
            <Button style={{fontSize: '18px'}} variant='magenta' size='large' >                   
                        DISCOVER AKYTEC PRODUCTS
                    </Button></Link> </div>
                    </div>
                    <Image src="/png/main/akytec-ad/akytec-ad.svg" width={637} height={347} alt=""/>
        </div>
    </section>)
}