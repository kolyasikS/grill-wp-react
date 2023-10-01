import React from 'react';
import {Box, Typography} from "@mui/material";
import {DarkRedCBtn} from "@shared/buttons/api";
import styles from './styles/introduction.module.scss';
const Introduction = () => {
    return (
        <section className={styles.section}>
            <div className={styles.section_wrapper}>
                <Box
                    position={'relative'}
                    sx={{
                        width: {
                            xl: '60%',
                            lg: '65%'
                        }
                    }}
                >
                    <h1
                        className={styles.section_title}
                    >
                        We're Happy to Help You With Your Grill Service Needs.
                    </h1>
                    <div className={styles.section_wrapper__btn}>
                        <DarkRedCBtn
                            px={40}
                            py={20}
                            fontSize={40}
                            fontWeight={700}
                            uppercase={false}
                        >
                            Contact Us Now!
                        </DarkRedCBtn>
                    </div>
                </Box>
            </div>
        </section>
    );
};

export default Introduction;