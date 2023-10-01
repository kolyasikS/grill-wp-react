import React from 'react';
import {ClassicContainer} from "@widgets/api";
import BrandsList from "../brands/BrandsList";
import styles from './styles/offers.module.scss';
import OffersList from "./OffersList";
import {UnfilledCBtn} from "@shared/buttons/api";

const Offers = ({}) => {
    return (
        <section className={styles.section}>
            <ClassicContainer>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>Did you know we can be your one-stop shop for all your grill-related needs?</h1>
                    <p className={styles.section__subtitle}>We offer the following services:</p>
                    <OffersList/>
                    <UnfilledCBtn discount={{
                                    value: 5,
                                    type: 'red'
                                  }}
                                  type={'white'}
                                  borderWidth={2}
                                  uppercase={true}
                                  fontWeight={800}
                    >
                        Book online - Get discount
                    </UnfilledCBtn>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default Offers;