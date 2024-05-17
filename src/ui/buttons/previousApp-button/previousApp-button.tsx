import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftIcon from "../../icon2/LeftIcon";
import classes from "./styles/previousApp-button.module.scss";

export const PreviousAppButton: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: any }>();
  const numberChartInString = id?.length ? id.length - 1 : 0;

  const lastChar = id[numberChartInString];

  let neededNumber = lastChar;

  const moveToPrevApp = () => {

    const numberChartInString = id?.length ? id.length - 1 : 0;

    const lastChar = +id[numberChartInString];


    navigate("/");

    // if (lastChar === 1) {
    //   return;
    // } else {
    //   neededNumber = lastChar - 1;
    //   navigate("/");
    // }
  };
  return (
    <div className={classes.prevAppButton}>
    <div className={classes.prevAppButton_container} >
      <button>
        <div className={classes.prevAppButton_buttonWrapper} onClick={moveToPrevApp}>
          <LeftIcon />
        </div>
      </button>
      <div>
        <div>Modules Mx110/210 |</div> <div>Application {neededNumber}</div>
      </div>
    </div>
    </div>
  );
};
