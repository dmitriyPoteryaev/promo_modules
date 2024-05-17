import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftIcon from "../../icon2/LeftIcon";
import classes from "./styles/button-to-main-page.module.scss";
import {defineIdApp} from "../../../utils/defineIdApp"

export const ButtonToMainPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const specificId  = defineIdApp(id)

  const moveToPrevApp = () => {
    navigate("/");
  };
  return (
    <div className={classes.button_to_main_page}>
      <div className={classes.button_to_main_page_container}>
        <button>
          <div
            className={classes.button_to_main_page_buttonWrapper}
            onClick={moveToPrevApp}
          >
            <LeftIcon />
          </div>
        </button>
        <div>
          <div>Modules Mx110/210 |</div> <div>Application {specificId}</div>
        </div>
      </div>
    </div>
  );
};
