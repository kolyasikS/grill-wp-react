import React from 'react';
import {Container} from "@mui/material";

const ClassicContainer = ({children, mobileScreenWidth = '95%', xl, lg = '1300px'}) => {
    return (
        <Container maxWidth={false}
                   className={'max-w-2xl'}
                   sx={{
                       maxWidth: {
                           xl,
                           lg,
                           xs: mobileScreenWidth
                       }
                   }}
        >
                {children}
        </Container>
    );
};

export default ClassicContainer;