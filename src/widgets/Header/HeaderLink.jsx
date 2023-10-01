import React from 'react';
import styles from "./styles/headerLink.module.scss";
import {Link} from "@mui/material";

const HeaderLink = ({children, link}) => {
    return (
        <Link
            href={link}
            className={styles.link}
            color={'#000'}
            underline={'none'}
        >
            {children}
        </Link>
    );
};

export default HeaderLink;