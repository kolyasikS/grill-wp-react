import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./styles/bonus.module.scss";

const Bonus = ({title, purpose, image}) => {
    return (
        <Grid lg={2} md={3} sm={6} xs={12} display={'flex'}>
            <Grid spacing={0} xs={12}
                  py={'30px'}
                  container
                  maxWidth={'100%'}
                  className={styles.bonus}
                  direction={{
                      sm: 'column',
                      xs: 'row'
                  }}
                  sx={{
                      minHeight: {
                          sm: 325,
                          xs: 150
                      }
                  }}
                  px={{
                      sm: 3,
                      xs: 4
                  }}
                  columnSpacing={{
                      sm: 0,
                  }}
                  justifyContent={{
                      sm: 'flex-start',
                      xs: 'center'
                  }}
            >
                <Grid sm={12} md={10} xs={4} pl={0} display={'flex'} justifyContent={'center'} pr={2}>
                    <img src={image} alt="" className={styles.bonus__image}/>
                </Grid>
                <Grid sm={12} md={10} xs={8} display={'flex'} flexDirection={'column'}
                      justifyContent={'center'} gap={1}>
                    <h3 className={styles.bonus__title}>{title}</h3>
                    <p className={styles.bonus__purpose}>{purpose}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Bonus;