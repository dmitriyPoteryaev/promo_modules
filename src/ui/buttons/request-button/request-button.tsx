import type {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
} from "react";

import classes from "./styles/request-button.module.scss";


export const RequestButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  onClick,
  ...props
}) => {
  const isDisabled = disabled;

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    onClick?.(event);
  };

  return <button className={classes.button}  disabled={isDisabled} onClick={onClickHandler}>{children}</button>;
};
