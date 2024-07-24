'use client'
import React from "react";
import classes from "./styles/block-equipment-description.module.scss";
import Image from "next/image";
import Link from "next/link";
import Pdf from '../icon2/Pdf';
import { getClasses } from './styles/get-classes';


import * as  modulesInfoMx110 from '../../modules/main/modifications_Mx110/modulesInfo.json';

import * as  modulesInfoMx210 from '../../modules/main/modifications_Mx210/modulesInfo.json';

// const Table = (props) => {

//     const {fullDescription} = props;

//    return <table className={classes.table_equipment}>
//     <thead >
//         <tr >
//             <th style={{borderLeft: '1px solid #DEDEDE', borderRight: '1px solid #DEDEDE', width: '20%'}}>Module</th>
//             <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Digital inputs</th>
//             <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Digital outputs</th>
//              <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Analog inputs</th>
//              <th style={{ width: '5%', borderRight: '1px solid #DEDEDE'}}>Analog outputs</th>
//              <th style={{ width: '41%', borderRight: '1px solid #DEDEDE'}}>Properties</th>
//              <th style={{ width: '7%', borderRight: '1px solid #DEDEDE'}}>Download</th>
//              <th style={{ width: '12%',borderRight: '1px solid #DEDEDE',}}>Buy</th>
//         </tr>
//     </thead>
//     <tbody>
  
//         {Object.values(fullDescription).map((modulePosition: any, ) => {

         
// return <>
// <tr style={{height: '22px'}}>
// <th style={{backgroundColor: '#00A197', borderLeft: '1px solid #DEDEDE', }}></th>
// <th style={{backgroundColor: '#00A197'}}></th>
// <th style={{backgroundColor: '#00A197'}}></th>
// <th style={{backgroundColor: '#00A197'}}></th>
// <th style={{backgroundColor: '#00A197'}}></th>
// <th style={{backgroundColor: '#00A197'}}></th>
// <th style={{backgroundColor: '#00A197'}}></th>
// <th style={{backgroundColor: '#00A197',borderRight: '1px solid #DEDEDE', }}></th>
// </tr>
//           { Object.values(modulePosition).map((elem: any, i: number) => {
//             return(   <tr>
//                  <th style={{borderLeft: '1px solid #DEDEDE', borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{Object.keys(modulePosition)[i]}</th>
//                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE' }}>{elem['Digital inputs']}</th>
//                     <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{elem['Digital outputs']}</th>
//                      <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{elem['Analog inputs']}</th>
//                      <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>{elem['Analog outputs']}</th>
//                      <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>
//                         {elem['Properties'].map((string) => {

//                             return (<div>{string}</div>)
//                         })}
//                         </th>
//                      <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}>    <Link target="_blank" href={elem['Download']} style={{display: 'flex', justifyContent: 'center'}}><Pdf/></Link></th>
//                      <th style={{  borderRight: '1px solid #DEDEDE', borderBottom:'1px solid #DEDEDE'}}><button>{elem['Buy']}</button></th> 
//                 </tr>)
//                 })}
//                 </>})}
    
//     </tbody>
// </table>

// }



export const BlockEquipmentDescription = (props) => {
    const {equipment, visonEquipment, setVisonEquipment, ChangeArrayWithAllOrderPosition, ArrayWithAllOrderPositionStore} = props;

    const  {name, img, width, height, fullDescription} = equipment;

//     const { token } = theme.useToken();

//     const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
 const { cnContainerBlockEquipment } = getClasses(visonEquipment[name]);





// const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
//     {
//       key: '1',
//       label: 'This is panel header 1',
//       children: <Table fullDescription={fullDescription}/>,
//       style: panelStyle,
//     },
//     {
//       key: '2',
//       label: 'This is panel header 2',
//       children: <Table fullDescription={fullDescription}/>,
//       style: panelStyle,
//     },
//     {
//       key: '3',
//       label: 'This is panel header 3',
//       children: <Table/>,
//       style: panelStyle,
//     },
//   ];

//   const panelStyle: React.CSSProperties = {
//     marginBottom: 24,
//     background: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: 'none',
//   };

console.log(ArrayWithAllOrderPositionStore[name]);


    return (
    <div style={{ width: '100%', maxWidth: '1135px', margin: 'auto', marginBottom: '40px'}}>
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
<th style={{backgroundColor: '#00A197',borderRight: '1px solid #00A197', }}></th>
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
                     <th style={{  borderRight: '1px solid #00A197', borderBottom:'1px solid #DEDEDE'}}>    <Link target="_blank" href={elem['Download']} style={{display: 'flex', justifyContent: 'center'}}><Pdf/></Link></th>
                     <th className={ArrayWithAllOrderPositionStore.some((elem) => elem.certain_name === Object.keys(modulePosition)[i]) ? classes.ordereButton_true : classes.ordereButton_false} onClick={() =>{ChangeArrayWithAllOrderPosition([...modulesInfoMx210.modules, ...modulesInfoMx110.modules].find((elem) => elem.certain_name === Object.keys(modulePosition)[i]))}}>
                        <button>{ArrayWithAllOrderPositionStore.some((elem) => elem.certain_name === Object.keys(modulePosition)[i]) ? "REMOVE FROM CART" : "ADD TO CART" }</button></th> 
                </tr>)
                })}
                </>})}
    
    </tbody>
</table>
</div>)

{/* <Collapse
bordered={false}
defaultActiveKey={['1']}
expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
style={{ background: token.colorBgContainer }}
items={getItems(panelStyle)}
/> */}

}