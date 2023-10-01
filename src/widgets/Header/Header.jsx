import React from 'react';
import {Link, Button, Stack, useMediaQuery} from "@mui/material";
import styles from './styles/header.module.scss';

import {ReactComponent as TelegramIcon} from '@assets/svgs/homePage/telegramHeader.svg';
import {ReactComponent as ViberIcon} from '@assets/svgs/homePage/viberHeader.svg';
import {ReactComponent as Logo} from '@assets/svgs/homePage/logo.svg'
import HeaderLink from "./HeaderLink";
import {ClassicButton, DarkRedCBtn, LightRedCBtn} from "@shared/buttons/api";
const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <a href="/" className={'shadow'}>
                    <Logo/>
                </a>
            </div>
            <div className={styles.nav__wrapper}>
                <nav className={styles.nav}>
                    <HeaderLink>About</HeaderLink>
                    <HeaderLink>Services</HeaderLink>
                    <HeaderLink>Gallery</HeaderLink>
                    <HeaderLink>Service areas</HeaderLink>
                    <HeaderLink>Blog</HeaderLink>
                    <HeaderLink link={'/wordpress/contacts'}>Contact us</HeaderLink>
                </nav>
            </div>
            <div className={styles.header__options}>
                <LightRedCBtn>
                    Book online
                </LightRedCBtn>
                <div className={styles.header__optionsIcons}>
                    <div className={styles.header__optionsIconWrapper}>
                        <TelegramIcon/>
                    </div>
                    <div className={styles.header__optionsIconWrapper}>
                        <ViberIcon/>
                    </div>
                </div>
            </div>
            <Stack direction={'row'}
                   alignItems={'center'}
                   display={{
                       lg: 'none'
                   }}
                   spacing={{
                       xs: 2,
                       md: 3
                   }} className={styles.header__adaptive}
            >
                <DarkRedCBtn px={20}
                             fontSize={14}
                             py={12}>
                    Book grill cleaning
                </DarkRedCBtn>
                <div className={styles.header__burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Stack>
        </header>
    );
};

export default Header;