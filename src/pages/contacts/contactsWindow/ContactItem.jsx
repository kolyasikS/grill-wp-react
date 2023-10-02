import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/contactItem.module.scss';
const ContactItem = ({title, data, linksList, icon}) => {
    console.log(data);
    return (
        <Grid
            xl={12}
            display={'flex'}
            justifyContent={'flex-start'}
        >
            <Grid
                container
                gap={6}
                display={'flex'}
                flexDirection={{
                    xl: 'row',
                }}
                flexWrap={'nowrap'}
                alignItems={'flex-start'}
                justifyContent={{
                    xl: 'flex-start',
                }}
                sx={{
                    padding: {
                    }
                }}
                columns={12}
                className={styles.item}
            >
                <Grid xl={2} sm={10} xs={0.1} maxWidth={40}>
                    <div className={styles.item_icon__wrapper}>
                        <svg className={styles.item_icon__bg} xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                            <circle cx="36" cy="36.5" r="36" fill="#2E315B"/>
                        </svg>
                        {icon}
                    </div>
                </Grid>
                <Grid xl={10} sm={10} xs={12}>
                    <h4 className={styles.item_title}>{title}</h4>
                    {data.map
                        ? data.map(text => <p className={styles.item_content}>{text}</p>)
                        : <p className={styles.item_content}>{data}</p>
                    }
                    {linksList}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ContactItem;