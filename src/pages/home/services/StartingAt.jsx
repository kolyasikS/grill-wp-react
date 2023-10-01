import React from 'react';
import styles from './styles/startingAt.module.scss';

const StartingAt = ({price}) => {
    return (
        <div className={'relative py-5'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="113" viewBox="0 0 102 113" fill="none"
                className={styles.leftSvg}
            >
                <path d="M0.5 66.4932L89.5 0.993164L101.5 66.4932L0.5 112.493V66.4932Z" fill="url(#paint0_linear_642_473)"/>
                <defs>
                    <linearGradient id="paint0_linear_642_473" x1="70" y1="76.9932" x2="96.5" y2="65.4932" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#95151C"/>
                        <stop offset="1" stopColor="#5F0005"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="113" viewBox="0 0 102 113" fill="none"
                className={styles.rightSvg}
            >
                <path d="M101.5 66.4932L12.5 0.993164L0.5 66.4932L101.5 112.493V66.4932Z" fill="url(#paint0_linear_642_474)"/>
                <defs>
                    <linearGradient id="paint0_linear_642_474" x1="32" y1="76.9932" x2="5.5" y2="65.4932" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#95151C"/>
                        <stop offset="1" stopColor="#5F0005"/>
                    </linearGradient>
                </defs>
            </svg>
            <div className={styles.blueBlock}>
                <p>you can have a squeaky-clean grill within 3 to 4 hours</p>
                <div className={styles.redTrapeze}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="496" height="67" viewBox="0 0 496 67" fill="none">
                        <path d="M12.5 0.493164H483.5L495.5 66.4932H0.5L12.5 0.493164Z" fill="#BC1922"/>
                    </svg>
                    <p>Starting at just ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default StartingAt;