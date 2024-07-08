import classNames from 'classnames/bind';

import type { RadioButtonProps } from '../radio-button';
import classes from './radio-button.module.scss';

const cn = classNames.bind(classes);

type PickeCheckboxProps = Pick<RadioButtonProps, 'checked'>;

export const getClasses = ({ checked }: PickeCheckboxProps) => {
  const cnContainerFakeRadioButton = cn(
    'fake_radio_button',
    `fake_radio_button_checked_${checked}`
  );

  return {
    cnContainerFakeRadioButton
  };
};
