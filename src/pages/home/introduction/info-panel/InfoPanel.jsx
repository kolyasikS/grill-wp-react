import React from 'react';
import styles from "../styles/infoPanel.module.scss";
import clock from '@assets/images/homePage/clock.webp';
import telephone from '@assets/images/homePage/telephone.webp';
import email from '@assets/images/homePage/email.webp';
import {Divider, Stack, useMediaQuery} from "@mui/material";
import {UnfilledCBtn} from "@shared/buttons/api";
import {CallUsList} from "@shared/lists/api";
import PhoneItem from "./PhoneItem";
import EmailItem from "./EmailItem";
const InfoPanel = () => {
    const isMobileSize = useMediaQuery('(max-width: 900px)');
    return (
        <Stack
            direction={{
                xs: 'column',
                md: 'row'
            }}
            spacing={{
                md: 0,
                xs: 1
            }}
            sx={{
                zIndex: 10
            }}
            divider={<Divider orientation={isMobileSize ? 'horizontal' : 'vertical'}  color={'#fff'} flexItem/>}
            className={styles.infoPanel}
        >
            <div className={styles.infoPanelItem}>
                <div>
                    <img src={clock} alt=""/>
                </div>
                <div>
                    <h3>working hours</h3>
                    <p className={styles.infoPanelItem__text}>Mon-Sat:</p>
                    <p className={styles.infoPanelItem__text}>7:00 am - 7:00 pm</p>
                    <p className={`${styles.infoPanelItem__text} mt-2`}>Online booking: 24/7</p>
                </div>
            </div>
            <PhoneItem/>
            <EmailItem/>
        </Stack>
    );
};

export default InfoPanel;