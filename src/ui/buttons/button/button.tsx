import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';

import type { Sizes } from '../../../types';
import { getClasses } from './styles/get-classes';

export type ButtonVariant = 'white' | 'magenta' | 'teal';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  disabled?: boolean;
  size: Sizes;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled,
  variant,
  size,
  isLoading,
  onClick,
  ...props
}) => {
  const isDisabled = disabled;

  const { cnButton } = getClasses({
    variant,
    size,
    isLoading,
    disabled
  });

  return (
    <button className={cnButton} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
