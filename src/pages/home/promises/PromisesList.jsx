import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {ourPromises} from "@assets/wordpress";
import PromiseItem from "./Promise";

const PromisesList = () => {
    return (
        <Grid container
              columnSpacing={{
                  sm: 3,
                  xs: 0
              }}
              rowSpacing={3} zIndex={1}
              sx={{
                  width: {
                      xl: '60%',
                      lg: '70%',
                      xs: '100%'
                  }
              }}
        >

            {ourPromises.map((promise, ind) => <PromiseItem {...promise} num={ind + 1} key={promise.id} allItems={ourPromises.length}/>)}
        </Grid>
    );
};

export default PromisesList;