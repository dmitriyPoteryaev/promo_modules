'use client';
import React, {useState} from "react";
import classes from '../modifications_Mx210/style/modifications_mx210.module.scss';
import * as  modulesInfo from './modulesInfo.json';
import { ModificationCard } from "src/ui/modification-card/modification-card";
import { RadioButton } from "src/ui/radio-button/radio-button";
import {sortModifications} from "../../../utils/sortModifications";
import {changeState} from '../../../utils/changeState'
import { observer } from "mobx-react-lite";
import { basketStore } from "../../../store";
export const Modifications_Mx110 = observer(() => {

  const [isChecked, isSetChecked] = useState({});

  const { ChangeArrayWithAllOrderPosition, ArrayWithAllOrderPositionStore } =
  basketStore;

    return (<section style={{paddingBottom: '143px'}} className={classes.moidificationBlock}>
      <header className={classes.moidificationBlock_title}>Mx110 with RS485</header>
      <div style={{width: '100%',maxWidth: '1162px', textAlign: 'left', fontSize: '20px', marginBottom: '9px'}}>Number of inputs/outputs:</div>
      <div  className={classes.moidificationBlock_listCheckbox}>
      <div>
      <span style={{marginRight: "12px"}}> AI</span>
      <ul style={{display: 'flex'}}>
      <li>
      <RadioButton name='AI' text="AI" number='2' value="2" checkedObj={isChecked} onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
        </li>
        <li>
      <RadioButton name='AI' text="AI" number='8' value="8" checkedObj={isChecked} onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
        </li>
        </ul>
        </div>
        <div>
          <span style={{marginRight: "12px"}}> AO</span>
          <ul style={{display: 'flex'}}>
          <li>
      <RadioButton name='AO' text="AO" checkedObj={isChecked} number='6' value="6" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
          </li>
          <li>
      <RadioButton name='AO' text="AO" checkedObj={isChecked} number='8' value="8" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;
        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
          </li>
         </ul>
         </div>
         <div>
            <span style={{marginRight: "12px"}}> DI</span>
            <ul style={{display: "flex"}}>
            <li>
         <RadioButton name='DI' text="DI" checkedObj={isChecked} number='8' value="8" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
        </li>
        <li>
         <RadioButton name='DI' text="DI" checkedObj={isChecked} number='16' value="16" onChange={(event) => {
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
        <div>
            <span style={{marginRight: "12px"}}> DO</span>
            <ul style={{display: "flex"}}>
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
                 <RadioButton name='DO' text="DO" checkedObj={isChecked} number='32' value="32" onChange={(event) => {
        const name = event.target.name;
        const value = event.target.value;

        isSetChecked(changeState(name, event.target.checked, value, isChecked))}}/>
         </li>
         </ul>
         </div>
      </div>
      <ul className={classes.moidificationBlock__listModifications}>
        {sortModifications(modulesInfo.modules, isChecked, ArrayWithAllOrderPositionStore)?.length !== 0 ?  sortModifications(modulesInfo.modules, isChecked, ArrayWithAllOrderPositionStore).map((infoAboutModule) => {
           
           return(<ModificationCard key={infoAboutModule.certain_name} info={infoAboutModule} ChangeArrayWithAllOrderPosition={ChangeArrayWithAllOrderPosition}/>)

        }) : <div className={classes.moidificationBlock__listModifications_empty}>There is not appropriate Mx110</div>

        }
      
      </ul></section>)


})