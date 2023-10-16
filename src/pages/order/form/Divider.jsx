import React from 'react';
import styles from '../styles/divider.module.scss';

const Divider = ({text, img}) => {
    return (
        <div className={styles.divider}>
            <div className={styles.divider__inner}>
                <div className={styles.divider__icon}>
                    <img src={img} alt='' width={50} height={50}/>
                </div>
                <h3 className={styles.divider__text}>{text}</h3>
            </div>
        </div>
    );
};

export default Divider;