import React from 'react';
import {ClassicContainer} from "@widgets/api";
import Introduction from "./introduction/Introduction";
import Form from "./form/Form";
import {ContactUsSection} from "../home/api";
import styles from './styles/contact-us-section.module.scss';

const OrderPage = () => {
    return (
        <main className={'relative bg-[#eeeeee] z-0'}>
            <Introduction/>
            <ClassicContainer xl={'1536px'} lg={'1400px'} mobileScreenWidth={'100%'}>
                <Form/>
            </ClassicContainer>
            <div className={styles.contactUs__section}>
                <ContactUsSection pt={200}/>
            </div>
        </main>
    );
};

export default OrderPage;