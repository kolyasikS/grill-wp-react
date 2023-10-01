import React from 'react';
import styles from './styles/promises.module.scss';
import {ClassicContainer} from "@widgets/api";
import Grid from "@mui/material/Unstable_Grid2";
import PromisesList from "./PromisesList";
import {Stack} from "@mui/material";
import {LightRedCBtn, UnfilledCBtn} from "@shared/buttons/api";
import {CallUsList, SocnetList} from "@shared/lists/api";

const Promises = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer xl={'1536px'}>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>Our Commitment to You: A Promise of Exceptional Grill Cleaning Service</h1>
                    <p className={styles.section__subtitle}>We prioritize our customers and strive to provide you with a 5-star experience.</p>
                    <h2>Our promise to you includes:</h2>
                    <PromisesList/>
                    <div className={styles.section__bottomContent}>
                        <div className={styles.promise__caption}>
                            <h3>contact us today</h3>
                            <p>to schedule your grill cleaning or receive a quote</p>
                        </div>
                        <Stack
                            direction={{
                                sm: 'row',
                                xs: 'column'
                            }}
                            sx={{
                                width: {
                                    sm: 'fit-content',
                                    xs: '100%'
                                }
                            }}
                            spacing={{
                                sm: 5,
                                xs: 3
                            }}>
                            <LightRedCBtn
                                uppercase={true}
                                discount={{value: 5, type: 'red'}}
                            >
                                schedule an appointment</LightRedCBtn>
                            <UnfilledCBtn
                                borderWidth={2}
                                type={'white'}
                                uppercase={true}
                            >
                                text us: (949) 910 6556</UnfilledCBtn>
                        </Stack>
                    </div>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default Promises;