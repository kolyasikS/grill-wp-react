import React from 'react';
import styles from './styles/sliderDot.module.scss';
const SliderDot = ({active, num, type}) => {
    return (
        <div className={`${styles.dot} 
            ${active ? styles.active : ''} 
            ${type === 'white' ? styles.white : styles.blue}`}
        >
        </div>
    );
};

export default SliderDot;