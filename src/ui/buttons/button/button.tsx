import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";

import type { Sizes } from '../../../types';
import { getClasses } from './styles/get-classes';
import Link from "next/link";

export type ButtonVariant = "white" | "magenta" | "teal";

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
    disabled,
  });


  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    onClick?.(event);
  };

  return (
    <button
      className={cnButton} 
      disabled={isDisabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
