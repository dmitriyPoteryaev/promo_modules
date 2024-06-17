import React, { FC } from "react";
import classes from "./styles/application.module.scss";
import Link from "next/link";
import Image from "next/image";

export interface ApplicationProps {
  excludedApp?: number;
  header: string;
}

export type application = { nameApp: string; AppPng: string, url: string };

const applications: application[] = [
  {
    nameApp: "Application #1",
    AppPng: "/png/application/application1.png",
    url: "/Application1Page",
  },
  {
    nameApp: "Application #2",
    AppPng: "/png/application/application2.png",
    url: "/application/2",
  },
  {
    nameApp: "Application #3",
    AppPng: "/png/application/application3.png",
    url: "/application/3",
  },
];

export const Application: FC<ApplicationProps> = (props) => {
  // const navigate = useNavigate();

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
              <div>
                <Link href={url}><Image width={400} height={234} alt={nameApp} src={AppPng} /></Link>
              </div>
              <Link  href={url}><span>
                {nameApp}
              </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>

  );
};
