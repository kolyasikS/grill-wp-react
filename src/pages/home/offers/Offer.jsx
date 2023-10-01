import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/offer.module.scss';
import {Icon} from "@mui/material";

const Offer = ({icon, title, colorType = 'white'}) => {
    return (
        <Grid
            lg={2}
            md={3}
            sm={4}
            xs={12}
            display={'flex'}
            justifyContent={'center'}
        >
            <Grid
                gap={3}
                display={'flex'}
                flexDirection={{
                    sm: 'column',
                    xs: 'row'
                }}
                alignItems={'center'}
                justifyContent={{
                    sm: 'center',
                    xs: 'flex-start'
                }}
                sx={{
                    padding: {
                        sm: '',
                        xs: '16px 32px'
                    }
                }}
                className={`${styles.offer} ${colorType === 'white' ? styles.whiteBg : styles.redBg}`}
            >
                {icon}
                <h4>{title}</h4>
            </Grid>
        </Grid>
    );
};

export default Offer;