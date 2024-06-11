import classNames from 'classnames/bind';

import type { CardOpportuinitiesProps } from '../card-opportunities';
import classes from './card-opportunities.module.scss';

const cn = classNames.bind(classes);

type PickedButtonProps = Pick<
CardOpportuinitiesProps,
   'variant' | 'path'
>;

export const getClasses = ({
  variant,
  path
}: PickedButtonProps) => {
  
  const cnCardOpportuinitiesInscription = 
  cn('cardOpportuinities_inscription', `cardOpportuinities_inscription--${variant}`, `cardOpportuinities_inscription--${path}`,);

  const cnCardOpportuinities = 
  cn('cardOpportuinities', `cardOpportuinities--${path}`,);


  return {
    cnCardOpportuinitiesInscription, cnCardOpportuinities
  };
};
