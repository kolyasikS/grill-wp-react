import React from 'react';
import styles from './callUsList.module.scss';
import {ReactComponent as Telegram} from '@assets/svgs/homePage/Telegram.svg';
import {ReactComponent as Messenger} from '@assets/svgs/homePage/Messenger.svg';
import {ReactComponent as Whatsapp} from '@assets/svgs/homePage/Whatsapp.svg';
import {Stack} from "@mui/material";
const CallUsList = ({spacing, display, className}) => {
    return (
        <Stack direction={'row'} spacing={spacing}
               sx={{
                   display
               }}
               className={`${styles.icons_stack} ${className}`}>
            <div className={styles.icon_wrapper}>
                <Telegram/>
            </div>
            <div className={styles.icon_wrapper}>
                <Messenger/>
            </div>
            <div className={styles.icon_wrapper}>
               <Whatsapp/>
            </div>
        </Stack>
    );
};

export default CallUsList;