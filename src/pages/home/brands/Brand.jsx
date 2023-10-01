import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {useMediaQuery} from "@mui/material";

const Brand = ({img}) => {
    const isMobileSize = useMediaQuery('(max-width: 600px)');
    return (
        <Grid xl={2}>
            <img src={img} alt="" width={isMobileSize ? 100 : 140}/>
        </Grid>
    );
};

export default Brand;