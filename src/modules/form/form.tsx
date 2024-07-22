'use client'

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Input, Select, Checkbox } from 'antd';
import { ClientLayout } from "../../ui/client-layout/client-layout";
import classes from "./style/form.module.scss"
import countryList from 'react-select-country-list'
import { FormInput } from '../../ui/form-input/form-input';
import { Button } from 'src/ui/buttons/button/button';
import Link from 'next/link';
import LeftIcon from '../../ui/icon2/LeftIcon';
import { basketStore } from "../../store/index";
import { observer } from "mobx-react-lite";
import { Spin } from "antd";
import Image from 'next/image';


const regValue = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const rightSideInputs = [

  {
    required: {
      required: 'County is required',
    },
    name: 'company',
    placeholder: 'Company',
  },
  {
    name: 'adress',
    placeholder: 'Adress',
  },
  {
    name: 'city',
    placeholder: 'City',
  },
  {
    name: 'zip',
    placeholder: 'Zip/Postal Code',
  },
  {
    name: 'country',
    placeholder: 'Country',
  },

];

const leftSideInputs = [
  {
    required: {
      required: 'First name is required',
    },
    name: 'firstName',
    placeholder: 'First name',
  },
  {
    required: {
      required: 'Last name is required',
    },
    name: 'lastName',
    placeholder: 'Last name',
  },
  {
    name: 'email',
    required: {
      required: 'Email ID is required',
      pattern: {
        value: regValue,
        message: 'Email is invalid'
  
      }
    },
    placeholder: 'Email'
  },
  {
  name:'telephone',
  placeholder: 'Telephone'

  }

];

type FormFileds = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  quoteComments: string;
  country: string;
  state: string;
  zip: string;
  city: string;
  adress: string;
  county: string;
  isGetInfo: boolean;
  isGetNews: boolean;
};

const { TextArea } = Input;

export const FormExample = observer(() => {

  const {  ArrayWithAllOrderPositionStore, isLoading, isOpenWindow, queryToFormStore, closeWindow } =
  basketStore;

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      lastName: "",
      telephone: "",
      state: "",
      country: "",
      quoteComments: "",
      zip: "",
      city: "",
      adress: "",
      isGetInfo: false,
      isGetNews: false,
    },
  })

  console.log(isLoading, isOpenWindow)

  const onSubmit: SubmitHandler<FormFileds> = (data) => {
    console.log(data);
    // queryToFormStore(data);

  }

  return (
    <ClientLayout>
     {isOpenWindow && <div
      style={{backgroundColor: 'rgba(101, 94, 94, 0.5)', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        position: 'fixed', 
        zIndex: '10',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
         }}
      >
      <div className={classes.form_window} style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '48px',
        maxWidth: '746px', 
        width: '100%', 
        position: 'relative'

         }}>
          <div style={{width: '100%', display: 'flex', justifyContent: "end"}}>   <Image onClick={closeWindow} style={{marginRight: '45px', cursor: 'pointer'}} width={15} height={15} src='/png/form/cross.svg' alt='cross'/></div>
          <Image style={{marginBottom: '28px'}} width={172} height={172} src='/png/form/proveNotice.svg' alt='notice'/>
        <header style={{marginBottom: '20px'}}>Request improved</header>
        <div style={{textAlign: 'center', 
          margin: 'auto', 
          marginBottom: '37px',
          fontSize: '20px', 
          lineHeight: '28.79px', 
          fontWeight: '400',
          fontFamily: 'Istok-Regular',
          paddingLeft: '76px',
          paddingRight: '76px',}}>We'll get back to you within 24 hours. If the request was sent on a Friday or a weekend, please expect a response on Monday.</div>
        <div  className={classes.form_ADakytec} style={{margin: 'auto', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          flexDirection: 'column',
          justifyContent: 'space-between', 
          paddingTop: '24px', 
          paddingBottom: '43px'}}>
        <header style={{fontSize: '28px', 
          lineHeight: '37.72px', 
          marginBottom: '33px', 
          paddingTop: '0px', 
          color: 'white',
          maxWidth: '598px' }} className={classes.akytecAd_title}>Looking for even more quality items for your projects?</header>

            <Button variant='magenta' size='large' >  
            <Link style={{width: '100%'}} target="_blank" href='https://akytec.de/en/'>                 
                        DISCOVER AKYTEC PRODUCTS
                        </Link> 
                    </Button>
             
        </div>
        </div>
      </div>}
      {ArrayWithAllOrderPositionStore.length === 0 ?
      <section style={{paddingBottom: '40px'}}><header className={classes.form_header} style={{textAlign: 'center'}}>You did not choose any positions</header></section>
      :<section style={{paddingBottom: '40px'}}>
        <header className={classes.form_header}>
        <div style={{maxWidth: '719px', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <button >
        <Link href={"/"}>
          <div
            className={classes.button_to_main_page_buttonWrapper}
          >
            <LeftIcon />
          </div>
          </Link>
        </button>
        <span>Your choise</span></div></header>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexWrap:'wrap', maxWidth: '1138px', width: '100%', marginBottom: '30px', justifyContent: 'center', margin: 'auto' }}>
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap'}}>
          <div style={{ width: '40%' }}>
            {leftSideInputs.map((inputInfo) => {

             const {required, name, placeholder } = inputInfo;

              return(    <FormInput
                control={control}
                errors={errors}
                key={name}
                name={name}
                required={required}
                placeholder={placeholder}
              />)
            })}
            <div style={{ position: 'relative' }}>
              <Controller
                name="quoteComments"
                control={control}
                render={({ field }) => <TextArea style={{ width: '100%', backgroundColor: '#E3E3E3', maxHeight: '430px', marginTop: '43px', minHeight: '175px' }} placeholder='Quote comments'  {...field} />}
              />{errors.telephone?.message && <div style={{ bottom: '-60px', height: '60px', marginTop: '43px', position: 'absolute' }} >{errors.telephone?.message}</div>}
            </div>
          </div>
          {/*the right side */}
          <div style={{ width: '40%' }}>
            {rightSideInputs.map((inputInfo) => {

              const {required, name, placeholder } = inputInfo

               return(<FormInput
                key={name}
                control={control}
                errors={errors}
                required={required}
                name={name}
                placeholder={placeholder}
              />)
            })}
            <div style={{ position: 'relative' }}>
              <Controller
                name="state"
                control={control}
                render={({ field }) => <Select showSearch  {...field} placeholder='Select here' optionFilterProp="label" style={{ width: '100%', backgroundColor: '#E3E3E3', height: '60px', marginTop: '43px' }}
                  options={countryList().getData()}
                />}
              />
            </div>
          </div>
          <label style={{width: '100%', marginTop: '52px', display: 'flex', justifyContent: 'center'}}>
            <Controller
              name="isGetInfo"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />
            <div style={{fontSize: '16px', marginLeft: '21px'}}>Please, call me, I would like to obtain further information about this product.</div>
          </label>
          <label style={{width: '100%', marginTop: '5px', display: 'flex', justifyContent: 'center'}}>
            <Controller
              name="isGetNews"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />
            <div style={{fontSize: '16px', marginLeft: '21px'}}>Yes, I would like to receive company news, notifications of new products, invitations tp webinars, etc.</div>
          </label>

          </div>
          <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Button size='medium' variant='magenta'type="submit" disabled={isLoading} >REQUEST FOR QUOTE</Button>
          {isLoading && <div style={{marginLeft: '20px'}}>< Spin /></div>}</div>
        </form>
      </section>}
    </ClientLayout>
  )
})