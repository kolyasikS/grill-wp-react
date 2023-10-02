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
            <Grid className={styles.section_content}
                  flexDirection={{
                      md: 'row',
                      xs: 'column'
                  }}
                  justifyContent={{
                      md: 'inherit',
                      xs: 'center'
                  }}
                  columns={12}
                  columnGap={{
                      md: 2,
                      xs: 0
                  }} pr={0}>
                <ContactsList/>
                <Form/>
            </Grid>
        </section>
    );
};

export default ContactsWindow;