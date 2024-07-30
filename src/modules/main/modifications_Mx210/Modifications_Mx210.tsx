'use client';
import React, {useState} from "react";
import classes from './style/modifications_mx210.module.scss';
import * as  modulesInfo from './modulesInfo.json';
import { ModificationCard } from "src/ui/modification-card/modification-card";
import { RadioButton } from "src/ui/radio-button/radio-button";
import {sortModifications} from "../../../utils/sortModifications";
import {changeState} from '../../../utils/changeState'
import { observer } from "mobx-react-lite";
import { basketStore } from "../../../store";
export const Modifications_Mx210 = observer(() => {

  const [isChecked, isSetChecked] = useState({});

  const [isShowFilter, isSetShowFilter] = useState(true);

  const { ChangeArrayWithAllOrderPosition, ArrayWithAllOrderPositionStore } =
  basketStore;

    return (<section className={classes.moidificationBlock} id='modification'>
      <header className={classes.moidificationBlock_title}>Mx210 with Ethernet</header>
      {/* <div style={{width: '100%',maxWidth: '1162px', textAlign: 'left', fontSize: '20px', marginBottom: '9px'}}>Number of inputs/outputs:</div> */}
       <div  className={classes.moidificationBlock_listCheckbox}>
        <div  className={classes.moidificationBlock_hideFiltersBlock}>Number of inputs/outputs: <button onClick={() => isSetShowFilter((prevState) => !prevState)}>{isShowFilter ? 'Hide filters' : 'Show filters'}</button></div>
        {isShowFilter && <div className={classes.moidificationBlock_boxCheckbox} style={{width: '76%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px'}}>
      <div  style={{marginTop: '13px', paddingLeft: '35px', paddingRight: '35px', paddingBottom: '8px', paddingTop: '7px', display: 'flex', borderRadius: '2px', boxShadow: '0 0 10px 0 rgba(38, 59, 59, 0.1)', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white'}}>
      <span> AI</span>
      <ul>
        <li>
      <RadioButton name='AI' text="AI" number='8' value="8" checkedObj={isChecked} onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
        </li>
        </ul>
        </div>
        <div style={{marginTop: '13px', paddingLeft: '35px', paddingRight: '35px', paddingBottom: '8px', paddingTop: '7px', display: 'flex', borderRadius: '2px', boxShadow: '0 0 10px 0 rgba(38, 59, 59, 0.1)', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white'}}>
          <span> AO</span>
          <ul>
          <li>
      <RadioButton name='AO' text="AO" checkedObj={isChecked} number='6' value="6" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
          </li>
         </ul>
         </div>

         <div style={{marginTop: '13px', paddingLeft: '35px', paddingRight: '35px', paddingBottom: '8px', paddingTop: '7px', display: 'flex', borderRadius: '2px', boxShadow: '0 0 10px 0 rgba(38, 59, 59, 0.1)', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', maxWidth: '300px', width: '100%'}}>
            <span> DO</span>
            <ul style={{display: "flex", maxWidth: '215px', width: '100%', justifyContent:"space-between"}}>
            <li>
           <RadioButton name='DO' text="DO" checkedObj={isChecked} number='4' value="4" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
         </li>
         <li>
               <RadioButton name='DO' text="DO" checkedObj={isChecked} number='8' value="8" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
          </li>
          <li>
               <RadioButton name='DO' text="DO" checkedObj={isChecked} number='16' value="16" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
          </li>
          <li>
                 <RadioButton name='DO' text="DO" checkedObj={isChecked} number='24' value="24" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
         </li>
         </ul>
         </div>
         <div style={{marginTop: '13px', paddingLeft: '35px', paddingRight: '35px', paddingBottom: '8px', paddingTop: '7px', display: 'flex', borderRadius: '2px', boxShadow: '0 0 10px 0 rgba(38, 59, 59, 0.1)', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', maxWidth: '320px', width: '100%'}}>
            <span> DI</span>
            <ul style={{display: "flex", minWidth: '244px', maxWidth: '276px', width: '100%', justifyContent:"space-between"}}>
            <li>
         <RadioButton name='DI' text="DI" checkedObj={isChecked} number='6' value="6" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
        </li>
        <li>
         <RadioButton name='DI' text="DI" checkedObj={isChecked} number='12' value="12" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
          </li>
          <li>
         <RadioButton name='DI' text="DI" checkedObj={isChecked} number='15' value="15" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
         </li>
         <li>
               <RadioButton name='DI' text="DI" checkedObj={isChecked} number='20' value="20" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
         </li>
         <li>
               <RadioButton name='DI' text="DI" checkedObj={isChecked} number='32' value="32" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
        </li>
        </ul>
        </div>
        </div>}
      </div>
      <ul className={classes.moidificationBlock__listModifications}>
        {sortModifications(modulesInfo.modules, isChecked, ArrayWithAllOrderPositionStore)?.length !== 0 ?  sortModifications(modulesInfo.modules, isChecked, ArrayWithAllOrderPositionStore).map((infoAboutModule) => {
           
           return(<ModificationCard key={infoAboutModule.certain_name} info={infoAboutModule} ChangeArrayWithAllOrderPosition={ChangeArrayWithAllOrderPosition}/>)

        }) : <div className={classes.moidificationBlock__listModifications_empty}>There is not appropriate Mx210</div>

        }
      
      </ul></section>)


})