import classNames from 'classnames/bind';

import classes from './modificationCard.module.scss';

const cn = classNames.bind(classes);

export const getClasses = ({ isOrdered }: any) => {

   const  cnContainerNotification = cn(`modificationCardBlock_addedCart_${Boolean(isOrdered)}`);

   const  cnContainerButton = cn(`modificationCardBlock_button_added_${Boolean(isOrdered)}`);
  
  return {
    cnContainerNotification,
    cnContainerButton

  };
};