'use client';
import  { ReactNode, FC, useState, useEffect } from "react";
import { ClientHeader } from "../client-header/client-header";
import { ClientFooter } from "../client-footer/client-footer";
import { MobileMenu } from "../mobile-modal-menu/mobile-modal-menu";
import classes from "./styles/client-layout.module.scss";
import { ShoppingCart } from "../shopping-cart/shopping-cart";
import SvgUpArrow from '../icon2/UpArrow'

interface ClientLayoutProps {
  children?: ReactNode;
}

export const ClientLayout: FC<ClientLayoutProps> = (props) => {
  const [isSideModals, setSideModals] = useState({
     
    isOpenModal: false,
    isOpenCart: false,
  });
  const { children } = props;

  const Links: { href: string, name: string }[] = [

    {
      href: "/#Mx210",
      name: "MX210 Modules",

    },
    {
      href: "/#Mx110",
      name: "MX110 Modules",

    },
    {
      href: "/#applications",
      name: "Applications",

    },
    {
      href: "/#modification",
      name: "Mx Modifications",

    },
    {
      href: "/moreInfo",
      name: "More Info",

    },

  ]


  const headerLinks: { href: string, name: string }[] = [

    {
      href: "/#Mx210",
      name: "MX210",

    },
    {
      href: "/#Mx110",
      name: "MX110",

    },
    {
      href: "/#applications",
      name: "Applications",

    },
    {
      href: "/#modification",
      name: "Mx Modifications",

    },

  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };


  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 1000; 

    if (scrollPosition >= triggerPosition) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(showButton);

  return (
    <div className={classes.layout_client} onClick={() => setSideModals( {isOpenCart: false, isOpenModal: false}) }>
      {showButton && <button onClick={scrollToTop} style={{position: 'fixed', bottom: '50px', right: '50px', zIndex: '10'}}><SvgUpArrow/></button>}
      <ClientHeader changeVisibilityModal={setSideModals} Links={headerLinks} />
      <ShoppingCart isSideModals={isSideModals} changeVisibilityCart={setSideModals} />
      <MobileMenu isSideModals={isSideModals} changeVisibilityModal={setSideModals} Links={Links} />
      <main className={classes.layout_client_container}>{children}</main>
      <ClientFooter />
    </div>
  );
};
