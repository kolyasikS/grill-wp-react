import React from 'react';
import {ClassicContainer} from "@widgets/api";
import styles from './styles/brands.module.scss';
import BrandsList from "./BrandsList";

const Brands = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer mobileScreenWidth={'100%'}>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>BBQ BRANDS WE SERVICE</h1>
                    <p className={styles.section__subtitle}>We clean and repair all major grill brands</p>
                    <BrandsList/>
                </div>
                <p className={styles.section__caption}>and many more...</p>
            </ClassicContainer>
        </section>
    );
};

export default Brands;