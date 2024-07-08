import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LeftIcon from '../../icon2/LeftIcon';
import classes from './styles/button-to-main-page.module.scss';
import { defineIdApp } from '../../../utils/defineIdApp';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ButtonToMainPage: FC = () => {
  const pathname = usePathname();

  const specificId = defineIdApp(pathname);

  return (
    <div className={classes.button_to_main_page}>
      <div className={classes.button_to_main_page_container}>
        <Link href={'/'}>
          <button>
            <div className={classes.button_to_main_page_buttonWrapper}>
              <LeftIcon />
            </div>
          </button>
        </Link>
        <div>
          <div>Modules Mx110/210 |</div> <div>Application {specificId}</div>
        </div>
      </div>
    </div>
  );
};
