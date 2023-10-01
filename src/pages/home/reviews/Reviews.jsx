import React from 'react';
import {ClassicContainer} from "@widgets/api";
import styles from './styles/reviews.module.scss';
import Grid from "@mui/material/Unstable_Grid2";
import {ourReviews} from "@assets/wordpress";
import Review from "./Review";
import {LightRedCBtn, SliderDots, UnfilledCBtn} from "@shared/buttons/api";
import {Stack, useMediaQuery} from "@mui/material";

const Reviews = () => {
    const isMobileSize = useMediaQuery('(max-width: 600px)');
    return (
        <section className={styles.section}>
            <ClassicContainer>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>here’s what happy customers say about our bbq cleaning service</h1>
                    <p className={styles.section__subtitle}>For ideal annual and bi-annual cleanings, and if you haven't cleaned your grill in more than one year, we recommend a deep cleaning, which includes:</p>
                    <Grid container
                          my={{
                              md: 8,
                              xs: 4
                          }}
                          justifyContent={'center'}
                          columnSpacing={{
                              lg: 5,
                              xs: 0
                          }}
                          rowSpacing={{
                              lg: 0,
                              sm: 5
                          }}
                    >
                        {isMobileSize
                            ? <Review {...ourReviews[0]}/>
                            : ourReviews.map(review => <Review {...review} key={review.id}/>)
                        }
                    </Grid>
                    <SliderDots amount={5}
                                my={{
                                    md: 8,
                                    xs: 4
                                }}
                                type={'white'}></SliderDots>
                    <Stack
                        direction={{
                            sm: 'row',
                            xs: 'column'
                        }}
                        spacing={4}
                        className={styles.section__stackBtns}
                    >
                        <UnfilledCBtn type={'white'}
                                      uppercase={true}
                                      fontWeight={800}
                                      borderWidth={2}
                        >
                            Leave a review
                        </UnfilledCBtn>
                        <LightRedCBtn uppercase={true} fontWeight={800}>schedule an appointment</LightRedCBtn>
                    </Stack>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default Reviews;