import React from 'react';
import styles from './styles/discover.module.scss';
import {ClassicContainer} from "@widgets/api";
import Grid from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";
import {LightRedCBtn, SliderDots, UnfilledCBtn} from "@shared/buttons/api";
import beforeCleanImg from '@assets/images/homePage/before-clean.webp';
import afterCleanImg from '@assets/images/homePage/after-clean.webp';
const Discover = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>Discover the Power of Our Service!</h1>
                    <p className={styles.section__subtitle}>From Dirty to Shiny - Check Out Our Before and After Gallery</p>
                    <Grid container
                          mt={{
                              sm: 5,
                              xs: 2
                          }}
                          direction={'row'}
                          justifyContent={'center'}
                          columnSpacing={{
                              md: 5,
                              xs: 0,
                          }}
                          rowSpacing={{
                              md: 0,
                              xs: 3
                          }}
                    >
                        <Grid md={6} xs={12}>
                            <div className={'relative rounded-[32px] bg-[#0000001c] border border-[#747474] p-4'}>
                                <div className={styles.beforeCleanCaption}><span>before</span></div>
                                <img src={beforeCleanImg} alt="" width={'100%'}/>
                            </div>
                        </Grid>
                        <Grid md={6} xs={12}>
                            <div className={'relative rounded-[32px] border border-[#747474] p-4'}>
                                <div className={styles.afterCleanCaption}><span>after</span></div>
                                <img src={afterCleanImg} alt="" width={'100%'}/>
                            </div>
                        </Grid>
                    </Grid>
                    <SliderDots amount={5}
                                my={{
                                    sm: 6,
                                    xs: 4
                                }}
                    />
                    <Stack
                        direction={{
                            sm: 'row',
                            xs: 'column'
                        }}
                        spacing={{
                            sm: 5,
                            xs: 3
                        }}
                    >
                        <UnfilledCBtn uppercase={true} fontWeight={800} borderWidth={2}>more cleaned grills</UnfilledCBtn>
                        <LightRedCBtn uppercase={true} fontWeight={800} discount={{type: 'black', value: 5}}>book now and get discount</LightRedCBtn>
                    </Stack>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default Discover;