import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftIcon from "../../icon2/LeftIcon";
import classes from "./styles/button-to-main-page.module.scss";

export const ButtonToMainPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const numberChartInString = id?.length ? id.length - 1 : 0;

  const lastChar = id?.[numberChartInString];

  const  IdApplication = lastChar;

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
          <div>Modules Mx110/210 |</div> <div>Application {IdApplication}</div>
        </div>
      </div>
    </div>
  );
};
