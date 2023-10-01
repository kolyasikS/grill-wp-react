import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import weber from '@assets/images/homePage/weber.webp';
import bull from '@assets/images/homePage/bull.webp';
import lion from '@assets/images/homePage/lion.webp';
import lynx from '@assets/images/homePage/lynx.webp';
import blaze from '@assets/images/homePage/blaze.webp';
import rcs from '@assets/images/homePage/rcs.webp';
import kitchenAid from '@assets/images/homePage/kitchenAid.webp';
import broilKing from '@assets/images/homePage/broil-king.webp';
import wolf from '@assets/images/homePage/wolf.webp';
import nexgrill from '@assets/images/homePage/nexgrill.webp';
import dcs from '@assets/images/homePage/dcs.webp';
import napoleon from '@assets/images/homePage/napoleon.webp';
import louisiana from '@assets/images/homePage/louisiana.webp';
import traeger from '@assets/images/homePage/traeger.webp';
import firemagic from '@assets/images/homePage/firemagic.webp';
import deltaHeat from '@assets/images/homePage/delta-heat.webp';
import aog from '@assets/images/homePage/aog.webp';
import viking from '@assets/images/homePage/viking.webp';
import summerset from '@assets/images/homePage/summerset.webp';
import charBroil from '@assets/images/homePage/char-broil.webp';
import luxor from '@assets/images/homePage/luxor.webp';
import Brand from "./Brand";
const BrandsList = () => {
    return (
        <Grid container columns={14}
              my={{
                  sm: 4,
                  xs: 0
              }}
              mt={{
                  xs: 4
              }}
              sx={{
                  minWidth: {
                      sm: 'fit-content',
                      xs: '100vw'
                  }
              }}
              justifyContent={'center'}
              columnSpacing={{
                  sm: 6,
                  xs: 3
              }}
              rowSpacing={{
                  sm: 2,
                  xs: 4
              }}
        >
                <Brand img={weber}/>
                <Brand img={bull}/>
                <Brand img={lion}/>
                <Brand img={lynx}/>
                <Brand img={blaze}/>
                <Brand img={rcs}/>
                <Brand img={kitchenAid}/>
                <Brand img={broilKing}/>
                <Brand img={wolf}/>
                <Brand img={nexgrill}/>
                <Brand img={dcs}/>
                <Brand img={napoleon}/>
                <Brand img={louisiana}/>
                <Brand img={traeger}/>
                <Brand img={firemagic}/>
                <Brand img={deltaHeat}/>
                <Brand img={aog}/>
                <Brand img={viking}/>
                <Brand img={summerset}/>
                <Brand img={charBroil}/>
                <Brand img={luxor}/>
        </Grid>
    );
};

export default BrandsList;