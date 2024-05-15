import React from "react";
import Application1 from "../../../ui/icon2/Application1";
import Application2 from "../../../ui/icon2/Application2";
import Application3 from "../../../ui/icon2/Application3";
import classes from "./styles/application.module.scss";
import { useNavigate } from "react-router-dom";

export const Application = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.application}>
      <header>Applications</header>
      <ul>
        <li>
          <Application1 onClick={() => navigate("/application/:" + "1")} />
          <span onClick={() => navigate("/application/:" + "1")}>Application #1</span>
        </li>
        <li>
          <Application2 />
          <span>Application #2</span>
        </li>
        <li>
          <Application3 />
          <span>Application #3</span>
        </li>
      </ul>
    </div>
  );
};
