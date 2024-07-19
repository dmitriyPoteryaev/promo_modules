import React from "react";
import { Controller} from 'react-hook-form';
import {  Input  } from 'antd';
import classes from './styles/form_input.module.scss'
import Image from "next/image";


export const FormInput = (props: any) => {

  const {control, errors, name, required, placeholder} = props;

 const requiredNotification =  required ?  required : null;

    return(     <div className={classes.form_input} style={{position: 'relative'}}>
      <span style={{ top: '-20px', marginTop: '43px', position: 'absolute', zIndex: '3'}}>{placeholder}{requiredNotification ? "*" : ""}</span>
        <Controller
          name={name}
          control={control}
          rules={requiredNotification}
          render={({ field }) => <Input style={{width: '100%', backgroundColor: '#E3E3E3', height: '60px', marginTop: '43px'}} type='text' placeholder={placeholder}  {...field} />}
        />{errors?.[name]?.message &&<div style={{ bottom: '-65px', height: '60px', position: 'absolute'}} >{errors?.[name]?.message}</div>}
        {errors?.[name]?.message &&<Image src='/png/form/attention.svg' width={20} height={20} style={{ right: '26px', top: '50%', position: 'absolute',  transform: 'translateY(50%)'}} alt="attention"/>}
         </div>)
}