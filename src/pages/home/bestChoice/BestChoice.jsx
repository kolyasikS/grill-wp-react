import React from 'react';
import styles from './styles/bestChoice.module.scss';
import {Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {ourServices} from "@assets/wordpress";
import Service from "./Service";

const BestChoice = () => {
    return (
        <section className={styles.section}>
            <Container  sx={{
                maxWidth: {
                    lg: '1300px',
                    xs: '95%'
                }
            }}>
                <h1 className={styles.section__title}>Why Our Grill Cleaning Services are the <span>Best Choice for You</span></h1>
                <Grid container xl={12} columnSpacing={3} rowSpacing={{
                    lg: 0,
                    xs: 3
                }}>
                    {ourServices.map((service, ind) => <Service key={service.id} num={ind} {...service}/>)}
                </Grid>
            </Container>
        </section>
    );
};

export default BestChoice;