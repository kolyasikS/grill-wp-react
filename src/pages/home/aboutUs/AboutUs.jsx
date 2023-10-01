import React from 'react';
import styles from './styles/aboutUs.module.scss';
import {ClassicContainer} from "@widgets/api";
import {Divider, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import telephoneImg from '@assets/images/homePage/telephone.webp';
import emailImg from '@assets/images/homePage/email.webp';
import {ClassicButton, UnfilledCBtn} from "@shared/buttons/api";
import {SocnetList} from "@shared/lists/api";

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer >
                <Grid container justifyContent={'center'}>
                    <Grid
                          xl={6}
                          lg={7}
                          md={8}
                          xs={12}
                          xlOffset={6}
                          className={styles.section__inner}
                          py={{
                              sm: 12,
                              xs: 8
                          }}
                          gap={4}
                    >
                        <h1 className={styles.section__title}>About Us</h1>
                        <div className={styles.section__description}>
                            <p>We specialize in providing top-quality cleaning services for all types of grills, from gas and charcoal to pellet and electric. With our team of experienced technicians, we guarantee to leave your grill looking and functioning like new.</p>
                            <p>We pride ourselves on our attention to detail and excellent customer service, and we are committed to exceeding your expectations. </p>
                            <p>Contact us today to schedule your grill cleaning and let us take care of the dirty work for you!</p>
                        </div>
                        <Stack width={'100%'}
                               direction={{
                                   sm: 'row',
                                   xs: 'column'
                               }}
                               justifyContent={'center'}
                               spacing={{
                                   sm: 8,
                                   xs: 4
                               }}
                        >
                            <div className={styles.section__contacts}>
                                <img src={telephoneImg} alt=""/>
                                <div className={styles.section__contacts_content}>
                                    <p className={'text-[16px]'}>call or text us</p>
                                    <p className={'text-[24px]'}>(949) 910 6556</p>
                                </div>
                            </div>
                            <div className={styles.section__contacts}>
                                <img src={emailImg} alt=""/>
                                <div className={styles.section__contacts_content}>
                                    <p className={'text-[16px]'}>Email us</p>
                                    <p className={'contact email'}>info@grillcleaning.com</p>
                                </div>
                            </div>
                        </Stack>
                        <Divider color={'#fff'} flexItem/>
                        <Stack spacing={4}
                               direction={{
                                   sm: 'row',
                                   xs: 'column'
                               }}
                               className={styles.section__btnList}
                               width={'max-content'}
                               position={'relative'}
                               sx={{
                                   left: {
                                       xl: '-25px',
                                       xs: 0
                                   },
                                   width: {
                                       xl: 'max-content',
                                       xs: '100%'
                                   }
                               }}
                        >
                            <UnfilledCBtn
                                fontSize={14}
                                px={32}
                                py={24}
                                type={'red'}
                            >
                                learn more about our company
                            </UnfilledCBtn>
                            <ClassicButton
                                fontSize={14}
                                px={32}
                                py={24}
                                hoverBgColor={'#252855'}
                                hoverShadow={'shadow-lg shadow-[#020636]'}
                                bgColor={'#181B3F'}
                                color={'#fff'}
                            >
                                book your grill cleaning now
                            </ClassicButton>
                        </Stack>
                        <p className={styles.section__caption}>and enjoy a spotless grill in no time!</p>
                        <SocnetList spacing={5}/>
                    </Grid>
                </Grid>
            </ClassicContainer>
        </section>
    );
};

export default AboutUs;