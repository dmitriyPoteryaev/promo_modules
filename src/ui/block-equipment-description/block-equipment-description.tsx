import React from "react";
import classes from "./styles/block-equipment-description.module.scss";
import Image from "next/image";
import Link from "next/link";
import Pdf from '../icon2/Pdf';
import { getClasses } from './styles/get-classes';

export const BlockEquipmentDescription = (props) => {

const {equipment, visonEquipment, setVisonEquipment} = props;

const  {name, img, width, height, fullDescription} = equipment;

const { cnContainerBlockEquipment } = getClasses(visonEquipment[name]);


    return (<div style={{ width: '100%', maxWidth: '1135px', margin: 'auto', marginBottom: '40px'}}>
        <div onClick={() => {setVisonEquipment((prevState) =>{ return {...prevState, [name]: !prevState[name]}})}} style={{border: '1px solid #DEDEDE', display: 'flex'}}>
            <div style={{borderRight: '1px solid #DEDEDE', width: '20%'}}><Image width={width} height={height} src={img} alt=''/></div>
            <div>{name}</div>
        </div>
         <table className={cnContainerBlockEquipment}>
    <thead >
        <tr >
            <th style={{borderLeft: '1px solid #DEDEDE', borderRight: '1px solid #DEDEDE', width: '20%'}}>Module</th>
            <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Digital inputs</th>
            <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Digital outputs</th>
             <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Analog inputs</th>
             <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Analog outputs</th>
             <th style={{ width: '41%', borderRight: '1px solid #DEDEDE'}}>Properties</th>
             <th style={{ width: '7%', borderRight: '1px solid #DEDEDE'}}>Download</th>
             <th style={{ width: '12%',borderRight: '1px solid #DEDEDE',}}>Buy</th>
        </tr>
    </thead>
    <tbody>
  
        {Object.values(fullDescription).map((modulePosition: any, ) => {

         
return <>
<tr style={{height: '22px'}}>
<th style={{backgroundColor: '#00A197', borderLeft: '1px solid #DEDEDE', }}></th>
<th style={{backgroundColor: '#00A197'}}></th>
<th style={{backgroundColor: '#00A197'}}></th>
<th style={{backgroundColor: '#00A197'}}></th>
<th style={{backgroundColor: '#00A197'}}></th>
<th style={{backgroundColor: '#00A197'}}></th>
<th style={{backgroundColor: '#00A197'}}></th>
<th style={{backgroundColor: '#00A197',borderRight: '1px solid #DEDEDE', }}></th>
</tr>
          { Object.values(modulePosition).map((elem: any, i: number) => {
            return(   <tr>
                 <th style={{borderLeft: '1px solid #DEDEDE', borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{Object.keys(modulePosition)[i]}</th>
                    <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE' }}>{elem['Digital inputs']}</th>
                    <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{elem['Digital outputs']}</th>
                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{elem['Analog inputs']}</th>
                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{elem['Analog outputs']}</th>
                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>
                        {elem['Properties'].map((string) => {

                            return (<div>{string}</div>)
                        })}
                        </th>
                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>    <Link target="_blank" href={elem['Download']} style={{display: 'flex', justifyContent: 'center'}}><Pdf/></Link></th>
                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}><button>{elem['Buy']}</button></th> 
                </tr>)
                })}
                </>})}
    
    </tbody>
</table>
</div>

)
}