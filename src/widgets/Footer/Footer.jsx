import React from 'react';
import {Box, Divider} from "@mui/material";
import styles from './footer.module.scss';
import Logo from "@shared/logo/Logo";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Divider/>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                sx={{
                    flexDirection: {
                        sm: 'row',
                        xs: 'column'
                    },
                    alignItems: {
                        sm: 'center',
                        xs: 'flex-start'
                    }
                }}
                pt={2}
                gap={2}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={3}>
                    <div className={styles.footer__logo}>
                        <Logo/>
                    </div>
                    <div className={styles.footer__copyright}>
                        <p>Copyright © 2023 GrillCleaning.us</p>
                        <p>All Rights Reserved.</p>
                    </div>
                </Box>
                <div className={styles.footer__privacy}>
                    <a href={'#'}>Privacy Policy</a>
                    <a href={'#'}>Terms and conditions</a>
                </div>
            </Box>
            <p className={styles.footer__caption}>Disclaimer: Our grill cleaning technicians do not clean inside any cabinets, shelving, and/or drawers.</p>
        </footer>
    );
};

export default Footer;