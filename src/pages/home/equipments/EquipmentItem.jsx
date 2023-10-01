import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/equipmentItem.module.scss';

const EquipmentItem = ({image, title}) => {
    return (
        <Grid md={6} sm={12} xs={6}>
            <Grid container spacing={0} columns={12}
                  className={styles.item}
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={180} py={0} px={{
                      md: 2,
                      xs: 0
                  }}
                  columnSpacing={{
                      sm: 2
                  }}
            >
                <Grid sm={5} xs={12} container
                      justifyContent={'center'}
                      alignItems={'center'}>
                    <img src={image} alt="" className={styles.item__image}
                         height={100}
                         width={100}
                    />
                </Grid>
                <Grid container sm={7} xs={12}
                      justifyContent={'center'}
                      alignItems={'center'}
                      spacing={0}>
                    <p className={styles.item__title}>{title}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EquipmentItem;