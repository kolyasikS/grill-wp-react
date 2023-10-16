import React from 'react';
import styles from "../styles/infoPanel.module.scss";
import telephone from "@assets/images/homePage/telephone.webp";
import {CallUsList} from "@shared/lists/api";

const PhoneItem = () => {
    return (
        <div className={styles.infoPanelItem}>
            <div>
                <img src={telephone} alt=""/>
            </div>
            <div>
                <h3>call or text us</h3>
                <p className={styles.infoPanelItem__phone}>(949) 910 6556</p>
                <CallUsList spacing={3}/>
            </div>
        </div>
    );
};

export default PhoneItem;