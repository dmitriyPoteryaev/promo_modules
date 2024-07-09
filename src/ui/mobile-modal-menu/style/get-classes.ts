import classNames from 'classnames/bind';

import classes from './mobile-modal-menu.module.scss';

const cn = classNames.bind(classes);

export const getClasses = (isOpenSidebar: boolean) => {
  const cnContainerSideBar = isOpenSidebar ? cn('modal', 'visible') : cn('modal', 'notVisible');

  return {
    cnContainerSideBar
  };
};
