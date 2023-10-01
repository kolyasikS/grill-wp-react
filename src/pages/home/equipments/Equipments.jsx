import React from 'react';
import styles from './styles/equipment.module.scss';
import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {ourEquipments} from "@assets/wordpress";
import EquipmentItem from "./EquipmentItem";
const Equipments = () => {
    return (
        <section className={styles.section}>
            <Container sx={{
                maxWidth: {
                    lg: '1300px',
                    xs: '95%'
                },
                zIndex: 1
            }}>
                <div className={styles.section__inner}>
                    <div className={styles.section__title_wrapper}>
                        <h1 className={styles.section__title}>To provide you with the best result we use:</h1>
                    </div>
                    <ul className={styles.section__list}>
                        <Grid container
                              ml={{
                                  sm: 1,
                                  xs: 0
                              }}
                              pr={{
                                  sm: 5,
                                  xs: 3,
                              }}
                              columnSpacing={{
                                  sm: 0,
                                  xs: 5
                              }}
                              rowSpacing={{
                                  sm: 0,
                                  xs: 5
                              }}
                              py={{
                                  sm: 0,
                                  xs: 2
                              }}
                              mt={{
                                  sm: 0,
                                  xs: 2
                              }}
                        >
                            {ourEquipments.map((equip) => <EquipmentItem key={equip.id} {...equip}/>)}
                        </Grid>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Equipments;