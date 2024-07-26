import classNames from 'classnames/bind';

import classes from './spesc-tool.module.scss';

const cn = classNames.bind(classes);

export const getClasses = ( visonEquipment: boolean) => {
  const cnContainerBlockEquipment = visonEquipment
    ? cn('AkytecToolPro_equipmnet', 'visible')
    : cn('AkytecToolPro_equipmnet', 'notVisible');

  return {
    cnContainerBlockEquipment,

  };
};