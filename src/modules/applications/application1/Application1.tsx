import React from "react";
import { BlockLayout } from "../../../ui/block-layout/block-layout";
import { ClientLayout } from "../../../ui/client-layout/client-layout";
import { PreviousAppButton } from "../../../ui/buttons/previousApp-button/previousApp-button";
import classes from "./styles/application1.module.scss";
import Application1Description from "../../../ui/icon2/Application1Description";

const Diamond = require("../../../assets/png/desc.png");

export const Application1 = () => {
  return (
    <ClientLayout>
      <BlockLayout>
        <PreviousAppButton />
        <header className={classes.application_header}>
          Ensuring Continuous Monitoring and Control of Server Room Parameters
        </header>
        <div className={classes.application_shotDescription}>
          <img
            className={classes.application_imgDescription}
            alt="HeaderLayout__logo"
            src={Diamond}
          />
          <p>
            akYtec Mx210 input and output modules play a key role in collecting
            data about the server room's condition. They enable continuous
            monitoring of various parameters, including air temperature,
            humidity, water leaks, UPS and cooling system operation parameters,
            as well as power supply and access control system (ACS) parameters.
            These devices ensure timely receipt of alarm, warning, and
            informational messages, which are essential elements for ensuring
            uninterrupted operation of an enterprise's information
            infrastructure.
          </p>
        </div>
      </BlockLayout>
    </ClientLayout>
  );
};
