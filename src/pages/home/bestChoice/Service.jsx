import React from 'react';
import styles from './styles/service.module.scss';
import Grid from "@mui/material/Unstable_Grid2";
import {Divider} from "@mui/material";

const Service = ({image, service, num}) => {
    return (
        <Grid lg={4} xs={12}>
            <Grid spacing={0}
                  p={3}
                  py={4}
                  pr={0}
                  container columns={12} alignItems={'center'}
                className={`${styles.service} ${num % 2 === 0 ? styles.blueBg : styles.redBg}`}
            >
                <Grid container xs={2} mr={2} justifyContent={'center'}>
                    <img src={image} alt="" width={50}/>
                </Grid>
                <Divider orientation={'vertical'} color={'#fff'} flexItem/>
                <Grid xs={8} ml={3}>
                    <p className={styles.service__description}>{service}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Service;