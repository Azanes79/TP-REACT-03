import React from 'react';
import { Box, Carousel, Image, ResponsiveContext } from 'grommet';
import niort from '../../shared/img/logo_niort.jpg';
import geoprod from '../../shared/img/Geoprod-Quality.png';

const Portfolio = () => {
    const size = React.useContext(ResponsiveContext);
    return (
        <Box fill="horizontal" background="#009d55" height="500px" id="box-portfolio" align="center" justify="center">
            <Carousel fill>
                <Image fit="cover" src={niort} />
                <Image fit="cover" src={geoprod} />
            </Carousel>
        </Box>
    );
}

export default Portfolio;