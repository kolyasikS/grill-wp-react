import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Offer from "./Offer";

import {ReactComponent as GrillCleaning} from '@assets/svgs/homePage/grill-cleaning.svg';
import {ReactComponent as GrillRepair} from '@assets/svgs/homePage/grill-repair.svg';
import {ReactComponent as OldGrillRemoval} from '@assets/svgs/homePage/old-grill-removal.svg';
import {ReactComponent as GrillAssembly} from '@assets/svgs/homePage/grill-assembly.svg';
import {ReactComponent as Maintenance} from '@assets/svgs/homePage/maintenance.svg';

const OffersList = () => {
    return (
        <Grid container
              columns={{
                  sm: 10,
                  xs: 12
              }}
              rowSpacing={{
                  lg: 0,
                  xs: 2
              }}
              zIndex={1} columnSpacing={4}
              justifyContent={'center'}
              mt={4}
              mb={6}
        >
            <Offer icon={<GrillCleaning/>} title={'Grill Cleaning'}/>
            <Offer icon={<GrillRepair/>} title={'Grill Repair'} colorType={'red'}/>
            <Offer icon={<OldGrillRemoval/>} title={'Old grill removal'}/>
            <Offer icon={<GrillAssembly/>} title={'Grill Assembly'}/>
            <Offer icon={<Maintenance/>} title={'Maintenance'}/>
        </Grid>
    );
};

export default OffersList;