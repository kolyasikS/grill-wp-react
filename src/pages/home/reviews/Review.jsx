import React from 'react';
import styles from './styles/review.module.scss';
import Grid from "@mui/material/Unstable_Grid2";
import {Rating} from "@mui/material";

const Review = ({name, image, rating, quote}) => {
    return (
        <Grid lg={4} xs={12} zIndex={1} >
            <Grid container spacing={0} columns={12}
                  className={styles.review}
                  p={4} columnSpacing={2} flexWrap={'nowrap'}
            >
                <Grid xs={3} pl={0}>
                    <img src={image} alt="" className={styles.review__image}
                         height={80}
                         width={80}
                    />
                </Grid>
                <Grid container xs={9} justifyContent={'flex-start'} direction={'column'} spacing={0}>
                    <p className={styles.review__name}>{name}</p>
                    <Rating readOnly
                            defaultValue={rating}
                            sx={{
                                '& .MuiRating-iconFilled': {
                                    color: '#BC1922'
                                }
                            }}
                    />
                    <p className={styles.review__quote}>“{quote}“</p>
                </Grid>
                <svg className={styles.review__triangle}
                     xmlns="http://www.w3.org/2000/svg" width="70" height="27" viewBox="0 0 70 27" fill="none">
                    <path d="M0 0.899414V26.8994L70 0.899414H0Z" fill="white"/>
                </svg>
            </Grid>
        </Grid>
    );
};

export default Review;