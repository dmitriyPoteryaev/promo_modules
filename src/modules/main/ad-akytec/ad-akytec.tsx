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
        <Link target="_blank" href='https://akytec.de/en/'>
            <Button style={{fontSize: '18px'}} variant='magenta' size='large' >                   
                        DISCOVER AKYTEC PRODUCTS
                    </Button></Link> </div>
                    </div>
                    <Image style={{paddingTop: '15px'}} src="/png/main/akytec-ad/akytec-ad.svg" width={620} height={365} alt=""/>
        </div>
    </section>)
}

export const AdAkytecBottom = () => {

    return(    <section className={classes.akytecAd_bottom} >
        <div  className={classes.akytecAd_img}>
        <img src={'/png/main/Ad/moduleAd_easy.png'}  style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{margin: 'auto', maxWidth: '1202px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '46px', paddingBottom: '46px'}}>
            <Image src="/png/main/Ad/logo.svg" width={125} height={30} alt='logo'/>
        <header style={{fontSize: '28px', lineHeight: '37.72px', marginBottom: '0px', paddingTop: '0px', maxWidth: '598px' }} className={classes.akytecAd_title}>Looking for even more quality items for your projects?</header>

            <Button variant='magenta' size='large' >  
            <Link style={{width: '100%'}} target="_blank" href='https://akytec.de/en/'>                 
                        DISCOVER AKYTEC PRODUCTS
                        </Link> 
                    </Button>
             
        </div>
    </section>)
}