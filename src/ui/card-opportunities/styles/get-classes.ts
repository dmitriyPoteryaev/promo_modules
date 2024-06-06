import classNames from 'classnames/bind';

import type { CardOpportuinitiesProps } from '../card-opportunities';
import classes from './card-opportunities.module.scss';

const cn = classNames.bind(classes);

type PickedButtonProps = Pick<
CardOpportuinitiesProps,
   'variant'
>;

export const getClasses = ({
  variant,
}: PickedButtonProps) => {
  const cnCardOpportuinitiesInscription = cn('cardOpportuinities_inscription', `cardOpportuinities_inscription--${variant}`,);


  return {
    cnCardOpportuinitiesInscription,
  };
};
