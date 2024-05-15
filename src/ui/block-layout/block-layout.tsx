import React, {FC} from "react";
import classes from "./styles/block-layout.module.scss";

export const BlockLayout: FC<any> = (props) => {
  
    const {children} = props;

  return <div className={classes.block_layout}>{children}</div>;
};
