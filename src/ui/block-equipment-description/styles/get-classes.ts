import classNames from 'classnames/bind';

import classes from './block-equipment-description.module.scss';

const cn = classNames.bind(classes);

export const getClasses = ( visonEquipment: boolean) => {
  const cnContainerBlockEquipment = visonEquipment
    ? cn('table_equipment', 'visible')
    : cn('table_equipment', 'notVisible');

  return {
    cnContainerBlockEquipment,

  };
};