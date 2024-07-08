'use client';

import React, { FC } from 'react';
import { Button } from '../buttons/button/button';
import { formAPI } from '../../api/query-to-form';
import Logo from '../icon2/Logo';
import Link from 'next/link';

import classes from './styles/client-header.module.scss';

export interface ClientHeaderProps {
  changeVisibilityModal: Function;
  Links: { href: string; name: string }[];
}

export const ClientHeader: FC<ClientHeaderProps> = (props) => {
  const { postInfoFromForm } = formAPI;

  const { changeVisibilityModal, Links } = props;

  return (
    <header className={classes.client_header} onClick={(event) => event.stopPropagation()}>
      <div className={classes.client_header_container}>
        <div>
          <button
            className={classes.client_header_modalButton}
            onClick={() => {
              changeVisibilityModal((prevState) => {
                return { isOpenCart: false, isOpenModal: !prevState.isOpenModal };
              });
            }}
          >
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <Logo />
          <nav>
            {Links.map(({ href, name }: { href: string; name: string }) => {
              return (
                <Link key={name} href={href}>
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div>
          <Link href={'/'}>More Info</Link>
          <Button
            onClick={() => {
              changeVisibilityModal((prevState) => {
                return { isOpenCart: !prevState.isOpenCart, isOpenModal: false };
              });
            }}
            variant="magenta"
            size="medium"
          >
            Basket
          </Button>
        </div>
      </div>
    </header>
  );
};
