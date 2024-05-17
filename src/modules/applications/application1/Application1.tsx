import React, {useEffect} from "react";
import { BlockLayout } from "../../../ui/block-layout/block-layout";
import { ClientLayout } from "../../../ui/client-layout/client-layout";
import { ButtonToMainPage } from "../../../ui/buttons/button-to-main-page/button-to-main-page";
import { Application } from "../../main/application";
import classes from "./styles/application1.module.scss";
import { Button } from "../../../ui/buttons/button/button";
import { useParams, useNavigate } from "react-router-dom";
import { defineIdApp } from "../../../utils/defineIdApp";

const png_description = require("../../../assets/png/application1/desc.png");
const png_main = require("../../../assets/png/application1/main.png");

export const Application1 = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const specificId = defineIdApp(id);

  const moveToNextApp = () => {
    
    const nextId = specificId ? +specificId + 1 : 1;

    if (nextId === 4) {
      navigate("/application/:" + 1);
    } else {
      navigate("/application/:" + nextId);
    }
  };


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <ClientLayout>
      <BlockLayout>
        <ButtonToMainPage />
        <section className={classes.application1}>
          <header className={classes.application1_header}>
            Ensuring Continuous Monitoring and Control of Server Room Parameters
          </header>
          <div className={classes.application1_shotDescription}>
            <figure>
              <img alt="description" src={png_description} />
            </figure>
            <p>
              akYtec Mx210 input and output modules play a key role in
              collecting data about the server room's condition. They enable
              continuous monitoring of various parameters, including air
              temperature, humidity, water leaks, UPS and cooling system
              operation parameters, as well as power supply and access control
              system (ACS) parameters. These devices ensure timely receipt of
              alarm, warning, and informational messages, which are essential
              elements for ensuring uninterrupted operation of an enterprise's
              information infrastructure.
            </p>
          </div>
          <figure className={classes.application1_mainImg}>
            <img alt="main" src={png_main} />
          </figure>
          <article className={classes.application1_textDescription}>
            <header>Full technical description of the project</header>
            <p>Key parameters monitored in server rooms include:</p>
            <ul>
              <li>
                akYtec Mx210 input and output modules play a key role in
                collecting data about the server room's condition. They enable
                continuous monitoring of various parameters, including air
                temperature, humidity, water leaks, UPS and cooling system
                operation parameters, as well as power supply and access control
                system (ACS) parameters. These devices ensure timely receipt of
                alarm, warning, and informational messages, which are essential
                elements for ensuring uninterrupted operation of an enterprise's
                information infrastructure.
              </li>
              <li>
                It's important to note that information from akYtec Mx210 input
                and output modules is transmitted directly to the local network
                without an intermediate controller, ensuring fast and reliable
                data transmission.
              </li>
              <li>
                To implement this scheme, discrete input modules with fast
                inputs (32DI) MV210-212 and analog input modules with universal
                inputs (8AI) MV210-101 are used.
              </li>
            </ul>
          </article>
          <div className={classes.application1_buttonBlock}>
            <Button variant="magenta" size="medium" onClick={moveToNextApp}>
              NEXT APPLICATION
            </Button>
          </div>
        </section>
      </BlockLayout>
      <Application excludedApp={1} header="Read more" />
    </ClientLayout>
  );
};
