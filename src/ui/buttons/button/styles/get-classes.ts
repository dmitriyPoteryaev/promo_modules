import classNames from 'classnames/bind';

import type { ButtonProps } from '../button';
import classes from './button.module.scss';

const cn = classNames.bind(classes);

type PickedButtonProps = Pick<
  ButtonProps,
   'variant' | 'size' | 'isLoading' | 'disabled'
>;

export const getClasses = ({
  variant,
  size,
  isLoading,
  disabled,
}: PickedButtonProps) => {
  const cnButton = cn('button', `button--${variant}`, `button--${size}`);


  return {
    cnButton,
  };
};
