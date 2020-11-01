import React, { useState } from 'react';
import { Box, ResponsiveContext, Text, Grid, Heading } from 'grommet';
import { AppsRounded, Calendar, Certificate, Location } from 'grommet-icons'
import data from './data.json';
import './Parcour.css';

import { useSelector } from 'react-redux';
import {
    getMode
} from '../color-mode/ColorMode';

const Parcour = () => {
    const size = React.useContext(ResponsiveContext);
    const [dataSelect, setDataSelect] = useState(data[0]);
    return (
        <Box fill="horizontal" className={useSelector(getMode) ? 'background-light color-light' : 'background-dark color-light'} height="500px" id={size === "small" ? "box-parcour-small" : "box-parcour"} justify="around">
            <Heading className={size === "small" ? "" : "title-parcour"} textAlign="center">
                Mon parcour
            </Heading>
            <Box direction={size === "small" ? "column" : "row"} align="center" justify="around" className={size === "small" ? "min-height-box" : "other"}>
                <Box id="1" className={useSelector(getMode) ? 'box-parcour-diplome background-second-light color-light' : 'background-second-dark box-parcour-diplome color-light'} margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} itemID={data[0].id} onClick={() => setDataSelect(data[0])}><Text textAlign="center">BAC</Text></Box>
                <Box id="2" className={useSelector(getMode) ? 'background-second-light box-parcour-diplome color-light' : 'background-second-dark box-parcour-diplome color-light'} margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} itemID={data[1].id} onClick={() => setDataSelect(data[1])}><Text textAlign="center">BTS</Text></Box>
                <Box id="3" className={useSelector(getMode) ? 'background-second-light box-parcour-diplome color-light' : 'background-second-dark box-parcour-diplome color-light'} margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} itemID={data[2].id} onClick={() => setDataSelect(data[2])}><Text textAlign="center">Licence</Text></Box>
                <Box id="4" className={useSelector(getMode) ? 'background-second-light box-parcour-diplome color-light' : 'background-second-dark box-parcour-diplome color-light'} margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} itemID={data[3].id} onClick={() => setDataSelect(data[3])}><Text textAlign="center">Mastère</Text></Box>
            </Box>
            <Grid className={size === "small" ? "grid-parcour-row" : "grid-parcour-column"} fill="horizontal">
                <Box className={useSelector(getMode) ? 'box-parcour background-second-light color-light' : 'background-second-dark box-parcour color-light'} align="center" justify="center" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Certificate color="white" className="icon-parcour-detail" />

                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.name}</Text>
                    </Grid>
                </Box>
                <Box className={useSelector(getMode) ? 'box-parcour background-second-light color-light' : 'background-second-dark box-parcour color-light'} align="center" justify="center" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail" >
                        <AppsRounded color="white" className="icon-parcour-detail" />
                        <Box overflow="auto">
                            <Text alignSelf="start" justifySelf="center" size="20px" textAlign="center">{dataSelect.description}</Text>
                        </Box>
                    </Grid>
                </Box>
                <Box className={useSelector(getMode) ? 'box-parcour background-second-light color-light' : 'background-second-dark box-parcour color-light'} align="center" justify="center" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Location color="white" className="icon-parcour-detail" />
                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.lieu}</Text>
                    </Grid>
                </Box>
                <Box className={useSelector(getMode) ? 'box-parcour background-second-light color-light' : 'background-second-dark box-parcour color-light'} align="center" justify="center" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Calendar color="white" className="icon-parcour-detail" />
                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.date}</Text>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
}

export default Parcour;