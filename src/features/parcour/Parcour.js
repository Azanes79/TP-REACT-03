import React, { useState } from 'react';
import { Box, ResponsiveContext, Stack, Diagram, Text, Grid } from 'grommet';
import { AppsRounded, Calendar, Certificate, Location } from 'grommet-icons'
import data from './data.json';
import './Parcour.css';



const Parcour = () => {
    const size = React.useContext(ResponsiveContext);
    const [dataSelect, setDataSelect] = useState(data[0]);
    return (
        <Box fill="horizontal" background="#009d55" height="500px" id={size === "small" ? "box-parcour-small": "box-parcour"}  justify="around">
            <Box direction={size === "small" ? "column" : "row"} align="center" justify="around" className={size === "small" ? "min-height-box" : "other"}>
                <Box id="1" className="box-parcour-diplome" margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} background="#254030" itemID={data[0].id} onClick={() => setDataSelect(data[0])}><Text textAlign="center">BAC</Text></Box>
                <Box id="2" className="box-parcour-diplome" margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} background="#254030" itemID={data[1].id} onClick={() => setDataSelect(data[1])}><Text textAlign="center">BTS</Text></Box>
                <Box id="3" className="box-parcour-diplome" margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} background="#254030" itemID={data[2].id} onClick={() => setDataSelect(data[2])}><Text textAlign="center">Licence</Text></Box>
                <Box id="4" className="box-parcour-diplome" margin="small" pad="medium" width={size === "small" ? "40vw" : "20vw"} background="#254030" itemID={data[3].id} onClick={() => setDataSelect(data[3])}><Text textAlign="center">Mastère</Text></Box>
            </Box>
            <Grid className={size === "small" ? "grid-parcour-row" : "grid-parcour-column"} fill="horizontal">
                <Box className="box-parcour" align="center" justify="center" background="#254030" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Certificate className="icon-parcour-detail" />
                        
                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.name}</Text>
                    </Grid>
                </Box>
                <Box className="box-parcour" align="center" justify="center" background="#254030" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail" >
                        <AppsRounded className="icon-parcour-detail" />
                        <Box overflow="auto">
                            <Text alignSelf="start" justifySelf="center" size="20px" textAlign="center">{dataSelect.description}</Text>
                        </Box>
                    </Grid>
                </Box>
                <Box className="box-parcour" align="center" justify="center" background="#254030" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Location className="icon-parcour-detail" />
                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.lieu}</Text>
                    </Grid>
                </Box>
                <Box className="box-parcour" align="center" justify="center" background="#254030" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Calendar className="icon-parcour-detail" />
                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.date}</Text>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
}

export default Parcour;