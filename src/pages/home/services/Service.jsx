import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/service.module.scss';
const Service = ({title, purpose, image}) => {
    return (
        <Grid xl={3} sm={6}>
            <Grid spacing={0} xl={12}
                  container
                  className={styles.service}
                  direction={{
                      sm: 'column',
                      xs: 'row'
                  }}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid sm={12} xs={5}>
                    <img src={image} alt="" className={styles.service__image}
                    />
                </Grid>
                <Grid sm={12} xs={7}>
                    <h3 className={styles.service__title}>{title}</h3>
                    <p className={styles.service__purpose}>{purpose}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Service;