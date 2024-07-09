import React from 'react';

import { Spin } from 'antd';
import classes from './styles/loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.layout_client}>
      <Spin size="large" />
    </div>
  );
};
