import React, { FC } from "react";
import classes from "./styles/application.module.scss"

import { useNavigate } from "react-router-dom";

export interface ApplicationProps {
  excludedApp?: number;
  header: string;
}

export type application = { nameApp: string; AppPng: string, url: string };

const applications: application[] = [
  {
    nameApp: "Application #1",
    AppPng: require("../../../assets/png/application/application1.png"),
    url: "1",
  },
  {
    nameApp: "Application #2",
    AppPng: require("../../../assets/png/application/application2.png"),
    url: "2",
  },
  {
    nameApp: "Application #3",
    AppPng: require("../../../assets/png/application/application3.png"),
    url: "3",
  },
];

export const Application: FC<ApplicationProps> = (props) => {
  const navigate = useNavigate();

  const { excludedApp, header } = props;

  const specificApplications = applications.filter(
    (application, index) => index + 1 !== excludedApp
  );

  return (
    
    <div className={classes.application}>
      <header>{header}</header>
      <ul>
        {specificApplications.map((application) => {
          const { nameApp, AppPng, url } = application;

          return (
            <li key={nameApp}>
              <div onClick={() => navigate("/application/:" + url)}>
                <img alt={nameApp} src={AppPng} />
              </div>
              <span onClick={() => navigate("/application/:" + url)}>
                {nameApp}
              </span>
            </li>
          );
        })}
      </ul>
    </div>

  );
};
