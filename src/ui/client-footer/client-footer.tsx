import React, { FC } from "react";

import classes from "./styles/client-footer.module.scss";
import Telephone from "../icon2/Telephone";
import Location from "../icon2/Location";
import Message from "../icon2/Message";
import Logo from "../icon2/Logo";
import MailTo from "../mailto/mailto";

export const ClientFooter: FC = () => {
  return (
    <footer className={classes.client_footer}>
      <div className={classes.client_footer_container}>
        <nav>
          <ul>
            <li className={classes.client_footer_linkedIn}>
              <a
                href="https://www.linkedin.com/company/akytec-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;
              </a>
            </li>
            <li className={classes.client_footer_youtube}>
              <a
                href="https://www.youtube.com/channel/UCaVN1SxbYL9a-JT4-zuVUpw"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;
              </a>
            </li>
            <li className={classes.client_footer_instagram}>
              <a
                href="https://www.instagram.com/akytec.international/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;
              </a>
            </li>
            <li className={classes.client_footer_facebook}>
              <a
                href="https://www.facebook.com/profile.php?id=61551799485988"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;
              </a>
            </li>
          </ul>
        </nav>
        <div className={classes.client_footer_fullInfo}>
          <div>
            <p className={classes.client_footer_shortInfo}>
              <Logo />
              <span>
                akYtec GmbH from Hanover, Germany develops and distributes
                innovative automation technology and industrial electronic
                products. These include various digital displays, control panels
                and programmable relays.
              </span>
            </p>
            <div className={classes.client_footer_Links}>
              <header>LINKS</header>
              <ul>
                <li>
                  <a href="https://akytec.de/en/impressum" title="Imprint">
                    Imprint
                  </a>
                </li>
                <li>
                  <a
                    href="https://akytec.de/en/datenschutzerklarung"
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.client_footer_contactUs}>
            <header>CONTACT US</header>
            <ul>
              <li>
                <Location />
                <div>akYtec GmbH</div>
                <div className={classes.client_footer_street}>
                  Vahrenwalder Str. 269 A 30179 Hannover, Germany
                </div>
              </li>
              <li>
                <Telephone />
                <div>Tel: +49 (0) 511 / 16 59 672-0</div>
                <div>Fax: +49 (0) 511 / 16 59 672-9</div>
              </li>
              <li>
                <Message />
                <div>
                  <MailTo email="info@akytec.de">info@akytec.de</MailTo>
                </div>
              </li>
            </ul>
          </div>
          <div className={classes.client_footer_attention}>
            <span>© 2024 akYtec. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
