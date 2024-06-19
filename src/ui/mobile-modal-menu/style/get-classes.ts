import classNames from 'classnames/bind';

import type { ClientMobileMenuProps } from '../mobile-modal-menu';
import classes from './mobile-modal-menu.module.scss';

const cn = classNames.bind(classes);

export const getClasses = ( isOpenSidebar: boolean) => {
  const cnContainerSideBar = isOpenSidebar
    ? cn('modal', 'visible')
    : cn('modal', 'notVisible');

//   const cnContainersLink = links.map((link) => {
//     if (link.children === activeLink) {
//       return cn('client_mobile_sidebar_Link__active');
//     }
//     return cn('client_mobile_sidebar_Link');
//   });

  return {
    cnContainerSideBar,

  };
};