import React from 'react';
import ContactsList from "./ContactsList";
import Form from "./Form";
import styles from './styles/contactsWindow.module.scss';
import Grid from "@mui/material/Unstable_Grid2";

const ContactsWindow = () => {
    return (
        <section className={styles.section}>
            <div className={styles.left_flame}></div>
            <div className={styles.right_flame}></div>
            <Grid className={styles.section_content} columns={12} p={9} columnGap={2} pr={0}>
                <ContactsList/>
                <Form/>
            </Grid>
        </section>
    );
};

export default ContactsWindow;