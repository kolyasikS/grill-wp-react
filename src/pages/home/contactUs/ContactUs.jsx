import React from 'react';
import {ClassicContainer} from "@widgets/api";
import {Stack, useMediaQuery} from "@mui/material";
import {ReactComponent as TelegramIcon} from '@assets/svgs/homePage/telegram-white.svg';
import {ReactComponent as ViberIcon} from '@assets/svgs/homePage/viber-white.svg';
import {UnfilledCBtn} from "../../../shared/buttons/api";

import styles from './styles/contactUs.module.scss';
import {CallUsList} from "@shared/lists/api";

const ContactUs = ({pt}) => {
    const isMobileSize = useMediaQuery('(max-width: 600px)');

    return (
        <section className={styles.section} style={{paddingTop: pt}}>
            <ClassicContainer>
                <div className={'flex flex-col gap-12 items-start'}>
                    <div>
                        <h1 className={styles.section__title}>How it works</h1>
                        <p className={styles.section__subtitle}>Working with us is as easy as one-two-three!</p>
                    </div>
                    <Stack spacing={3} className={styles.section__stepList}>
                        <div className={styles.section__step}>
                            <div className={styles.section__step_num}>
                                <span>1</span>
                            </div>
                            <div>
                                <h3>You contact us</h3>
                                <p>in any convenient way</p>
                                <div className={'flex items-center gap-10 mb-2'}>
                                    <p style={{
                                        fontWeight: 600,
                                        fontSize: 20,
                                        lineHeight: '120%'
                                    }} >(949) 910 6556</p>
                                    <Stack direction={'row'} spacing={0}
                                           sx={{
                                               display: {
                                                   md: 'flex',
                                                   xs: 'none'
                                               }
                                           }}
                                           top={-5}
                                           left={-10}
                                           position={'relative'}>
                                        <div className={styles.contactUs__socnetIconWrapper}>
                                            <TelegramIcon/>
                                        </div>
                                        <div className={styles.contactUs__socnetIconWrapper}>
                                            <ViberIcon/>
                                        </div>
                                    </Stack>
                                </div>
                                <CallUsList spacing={2} display={isMobileSize ? 'flex' : 'none'}/>
                            </div>
                        </div>
                        <div className={styles.section__step}>
                            <div className={styles.section__step_num}>
                                <span>2</span>
                            </div>
                            <div>
                                <h3>We discuss your needs</h3>
                                <p>give you a free estimate and schedule an appointment</p>
                            </div>
                        </div>
                        <div className={styles.section__step}>
                            <div className={styles.section__step_num}>
                                <span>3</span>
                            </div>
                            <div>
                                <h3>We come and clean your grill!</h3>
                                <p>Your grill is sparkling, your food tastes healthy.</p>
                            </div>
                        </div>
                    </Stack>
                    <UnfilledCBtn
                        className={styles.section__scheduleBtn}
                        type={'white'}
                        uppercase={true}
                        fontWeight={800}
                        borderWidth={2}
                    >
                        schedule appointment
                    </UnfilledCBtn>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default ContactUs;