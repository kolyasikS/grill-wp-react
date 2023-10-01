import React from 'react';
import {Container, Link, Paper, Stack, styled} from "@mui/material";
import {ClassicButton, LightRedCBtn} from "@shared/buttons/api";
import styles from './styles/whyImportant.module.scss';
import {importantFactors} from "@assets/wordpress";
import Factor from "./Factor";
import Grid from "@mui/material/Unstable_Grid2";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027' ,
    padding: '5px',
    textAlign: 'center',
    color: '#cacaca',
}));
const WhyImportant = () => {
    return (
        <section className={styles.section}>
            <Container sx={{
                maxWidth: {
                    lg: '1300px',
                    xs: '95%'
                }
            }}>
                <div className={styles.section__top}>
                    <h1 className={styles.section__title}>Grill Cleaning -<br/><span>Why it's so important</span></h1>
                    <ul>
                        <Grid container columnSpacing={3} rowSpacing={{
                            lg: 13,
                            xs: 3
                        }}
                              alignItems={'center'}>
                            {importantFactors.map(factor =>
                                <Factor key={factor.id} {...factor}/>
                            )}
                        </Grid>
                    </ul>
                </div>
            </Container>
            <Stack className={styles.section__bottom} direction={{
                sm: 'row'
            }} width={'100%'} alignItems={'center'} justifyContent={'center'}>
                <a href="#" className={styles.section__bottomLink}>
                    <p>Learn more about the importance of keeping your grill clean</p>
                </a>
                <LightRedCBtn
                    discount={{value: 5}}
                    px={24}
                    py={16}
                    fontWeight={800}
                    fontSize={16}
                    uppercase={true}
                >
                    schedule an appointment
                </LightRedCBtn>
            </Stack>
        </section>
    );
};

export default WhyImportant;