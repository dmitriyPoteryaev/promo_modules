import React, { FC } from "react";
import LeftIcon from "../../icon2/LeftIcon";
import classes from "./styles/button-to-main-page.module.scss";
import {defineIdApp} from "../../../utils/defineIdApp"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const ButtonToMainPage: FC = () => {
  const pathname = usePathname()

  const specificId  = defineIdApp(pathname);

  return (
    <div className={classes.button_to_main_page}>
      <div className={classes.button_to_main_page_container}>
      <Link href={"/"}>
        <button>
          <div
            className={classes.button_to_main_page_buttonWrapper}
          >
            <LeftIcon />
          </div>
        </button>
        </Link>
        <div>
        <Link href={"/"}><div>Modules Mx110/210 |</div></Link><Link href={"/#applications"}> <div>Application </div></Link>
        </div>
      </div>
    </div>
  );
};
