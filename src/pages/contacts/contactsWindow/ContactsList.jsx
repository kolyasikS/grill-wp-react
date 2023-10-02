import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {outContacts} from "@assets/wordpress";
import ContactItem from "./ContactItem";

const ContactsList = () => {
    return (
        <Grid container xl={7.5} lg={7} md={6.5}
              xs={12} columns={12}
              p={{
                  lg: '60px 10px 60px 72px',
                  md: '60px 10px 60px 72px',
                  sm: '55px 55px 55px',
                  xs: '0px 40px 55px',
              }}
              direction={'column'}
              justifyContent={{
                  md: 'center',
              }}
              alignItems={{
                  md: 'flex-start',
              }}
              rowGap={{
                  md: 13,
                  sm: 10,
                  xs: 9
              }}>
            {outContacts.map(contact => <ContactItem key={contact.id} {...contact}/>)}
        </Grid>
    );
};

export default ContactsList;