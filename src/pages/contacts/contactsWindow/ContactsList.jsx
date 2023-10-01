import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {outContacts} from "@assets/wordpress";
import ContactItem from "./ContactItem";

const ContactsList = () => {
    return (
        <Grid container xl={7.5} columns={12} direction={'column'} justifyContent={'center'} rowGap={13}>
            {outContacts.map(contact => <ContactItem key={contact.id} {...contact}/>)}
        </Grid>
    );
};

export default ContactsList;