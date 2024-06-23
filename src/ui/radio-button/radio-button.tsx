'use client';
import type { FC, InputHTMLAttributes } from 'react';

import classes from './style/radio-button.module.scss';
import { getClasses } from './style/get-classes';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  number: string;
  checkedObj: any;
  name: string;
  value: string;
}

export const RadioButton: FC<RadioButtonProps> = ({
  text,
  number,
  checkedObj,
   ...props
}) => {

    const {value, name} = props;

    console.log(checkedObj?.[name]?.value === value);
    
   const checked =  checkedObj?.[name]?.value === value;

    const {cnContainerFakeRadioButton} = getClasses({
        checked,
      });

  return (
    <label className={classes.label_radio_button}>
      <input className={classes.input_radio_button}  type="checkbox" {...props} checked={checked}/>
      <span className={cnContainerFakeRadioButton}>
      </span>
      <span className={classes.label_radio_number}>{number}</span>
    </label>
  );
};