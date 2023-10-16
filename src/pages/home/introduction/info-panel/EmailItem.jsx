import React from 'react';
import styles from "../styles/infoPanel.module.scss";
import email from "@assets/images/homePage/email.webp";
import {UnfilledCBtn} from "@shared/buttons/api";

const EmailItem = () => {
    return (
        <div className={styles.infoPanelItem}>
            <div>
                <img src={email} alt=""/>
            </div>
            <div>
                <h3>email us</h3>
                <p className={`${styles.infoPanelItem__text} mb-4`}>info@grillcleaning.com</p>
                <UnfilledCBtn
                    py={14}
                    px={18}
                >
                    contact us
                </UnfilledCBtn>
            </div>
        </div>
    );
};

export default EmailItem;