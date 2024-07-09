'use client';
import React, { useState } from 'react';
import classes from './style/modifications_mx210.module.scss';
import * as modulesInfo from './modulesInfo.json';
import { ModificationCard } from 'src/ui/modification-card/modification-card';
import { RadioButton } from 'src/ui/radio-button/radio-button';
import { sortModifications } from '../../../utils/sortModifications';
import { changeState } from '../../../utils/changeState';
import { observer } from 'mobx-react-lite';
import { basketStore } from '../../../store';
export const Modifications_Mx210 = observer(() => {
  const [isChecked, isSetChecked] = useState({});

  const { ChangeArrayWithAllOrderPosition, ArrayWithAllOrderPositionStore } = basketStore;

  // console.log(ArrayWithAllOrderPositionStore);

  return (
    <section className={classes.moidificationBlock}>
      <div className={classes.moidificationBlock_listCheckbox}>
        <span>Number of inputs/outputs:</span>
        <div>
          <span style={{ marginRight: '12px' }}> AI</span>
          <ul>
            <li>
              <RadioButton
                name="AI"
                text="AI"
                number="8"
                value="8"
                checkedObj={isChecked}
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;
                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
          </ul>
        </div>
        <div>
          <span style={{ marginRight: '12px' }}> AO</span>
          <ul>
            <li>
              <RadioButton
                name="AO"
                text="AO"
                checkedObj={isChecked}
                number="6"
                value="6"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;
                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
          </ul>
        </div>
        <div>
          <span style={{ marginRight: '12px' }}> DI</span>
          <ul style={{ display: 'flex' }}>
            <li>
              <RadioButton
                name="DI"
                text="DI"
                checkedObj={isChecked}
                number="6"
                value="6"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DI"
                text="DI"
                checkedObj={isChecked}
                number="12"
                value="12"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DI"
                text="DI"
                checkedObj={isChecked}
                number="15"
                value="15"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DI"
                text="DI"
                checkedObj={isChecked}
                number="20"
                value="20"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DI"
                text="DI"
                checkedObj={isChecked}
                number="32"
                value="32"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
          </ul>
        </div>
        <div>
          <span style={{ marginRight: '12px' }}> DO</span>
          <ul style={{ display: 'flex' }}>
            <li>
              <RadioButton
                name="DO"
                text="DO"
                checkedObj={isChecked}
                number="4"
                value="4"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;
                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DO"
                text="DO"
                checkedObj={isChecked}
                number="8"
                value="8"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DO"
                text="DO"
                checkedObj={isChecked}
                number="16"
                value="16"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
            <li>
              <RadioButton
                name="DO"
                text="DO"
                checkedObj={isChecked}
                number="24"
                value="24"
                onChange={(event) => {
                  const name = event.target.name;
                  const value = event.target.value;

                  isSetChecked(changeState(name, event.target.checked, value, isChecked));
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <ul className={classes.moidificationBlock__listModifications}>
        {sortModifications(modulesInfo.modules, isChecked, ArrayWithAllOrderPositionStore)
          ?.length !== 0 ? (
          sortModifications(modulesInfo.modules, isChecked, ArrayWithAllOrderPositionStore).map(
            (infoAboutModule) => {
              return (
                <ModificationCard
                  key={infoAboutModule.certain_name}
                  info={infoAboutModule}
                  ChangeArrayWithAllOrderPosition={ChangeArrayWithAllOrderPosition}
                />
              );
            }
          )
        ) : (
          <div className={classes.moidificationBlock__listModifications_empty}>
            There is not appropriate Mx210
          </div>
        )}
      </ul>
    </section>
  );
});
