import React, { FC, ReactNode } from "react";
import Application1 from "../../../ui/icon2/Application1";
import Application2 from "../../../ui/icon2/Application2";
import Application3 from "../../../ui/icon2/Application3";
import classes from "./styles/application.module.scss";
import { useNavigate } from "react-router-dom";

export interface ApplicationProps {
  excludedNumber?: number;
  header: string;
}

export type application = { nameApp: string; AppPng: ReactNode };

const applications: application[] = [
  {
    nameApp: "Application #1",
    AppPng: <Application1 />,
  },
  {
    nameApp: "Application #2",
    AppPng: <Application2 />,
  },
  {
    nameApp: "Application #3",
    AppPng: <Application3 />,
  },
];

export const Application: FC<ApplicationProps> = (props) => {
  const navigate = useNavigate();

  const { excludedNumber, header } = props;

  const neddedApp = applications.filter(
    (application, index) => index + 1 !== excludedNumber
  );

  return (
    <div className={classes.application}>
      <header>{header}</header>
      <ul>
        {neddedApp.map((application, index) => {
          const { nameApp, AppPng } = application;

          const numberApp: number = index + 1;
          return (
            <li key={nameApp}>
              <div onClick={() => navigate("/application/:" + numberApp)}>
                {AppPng}
              </div>
              <span onClick={() => navigate("/application/:" + numberApp)}>
                {nameApp}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
