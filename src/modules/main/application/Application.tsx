'use client';
import React, { FC } from "react";
import classes from "./styles/application.module.scss";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export interface ApplicationProps {
  excludedApp?: number;
  header: string;
}

export type application = { nameApp: string; AppPng: string, url: string };

const applications: application[] = [
  {
    nameApp: "Application #1",
    AppPng: "/png/application/application1.png",
    url: "/application1",
  },
  {
    nameApp: "Application #2",
    AppPng: "/png/application/application2.png",
    url: "/application2",
  },
  {
    nameApp: "Application #3",
    AppPng: "/png/application/application3.png",
    url: "/application3",
  },
];

export const Application: FC<ApplicationProps> = (props) => {

  const router = useRouter()
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
                <Image width={400} height={234} alt={nameApp} src={AppPng} onClick={() => router.push(url)}/>
              </div>
              <span onClick={() => router.push(url)}>
                {nameApp}
              </span>
            </li>
          );
        })}
      </ul>
    </div>

  );
};
