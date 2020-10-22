import React, { useState } from 'react';
import { Box, ResponsiveContext, Stack, Diagram, Text, Grid } from 'grommet';
import { AppsRounded, Calendar, Certificate, Location } from 'grommet-icons'
import data from './data.json';
import './Parcour.css';



const Parcour = () => {
    const size = React.useContext(ResponsiveContext);
    const [dataSelect, setDataSelect] = useState(data[0]);
    return (
        <Box fill="horizontal" background="#009d55" height="500px" id="box-parcour">
            <Stack guidingChild={1} alignSelf="center" margin="2vw 0">
                <Diagram
                    connections={[
                        {
                            fromTarget: '1',
                            toTarget: '2',
                            thickness: 'xsmall',
                            color: '#6FFFB0',
                        },
                        {
                            fromTarget: '2',
                            toTarget: '3',
                            thickness: 'xsmall',
                            color: '#6FFFB0',
                            type: 'rectilinear',
                        },
                        {
                            fromTarget: '3',
                            toTarget: '4',
                            thickness: 'xsmall',
                            color: '#6FFFB0',
                            type: 'rectilinear',
                        }
                    ]}
                />
                <Box direction={size === "small" ? "column" : "row"}>
                    <Box id="1" className="box-parcour-diplome" margin="small" pad="medium" width="10vw" background="#254030" itemID={data[0].id} onClick={() => setDataSelect(data[0])}><Text textAlign="center">BAC</Text></Box>
                    <Box id="2" className="box-parcour-diplome" margin="small" pad="medium" width="10vw" background="#254030" itemID={data[1].id} onClick={() => setDataSelect(data[1])}><Text textAlign="center">BTS</Text></Box>
                    <Box id="3" className="box-parcour-diplome" margin="small" pad="medium" width="10vw" background="#254030" itemID={data[2].id} onClick={() => setDataSelect(data[2])}><Text textAlign="center">Licence</Text></Box>
                    <Box id="4" className="box-parcour-diplome" margin="small" pad="medium" width="10vw" background="#254030" itemID={data[3].id} onClick={() => setDataSelect(data[3])}><Text textAlign="center">Mastère</Text></Box>
                </Box>
            </Stack>
            <Grid className={size === "small" ? "grid-parcour-row" : "grid-parcour-column"}  fill="horizontal">
                <Box className="box-parcour" align="center" justify="center" background="#254030" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <Certificate className="icon-parcour-detail" />
                        <Text alignSelf="start" justifySelf="center" size="24px" textAlign="center">{dataSelect.name}</Text>
                    </Grid>
                </Box>
                <Box className="box-parcour" align="center" justify="center"  background="#254030" pad="10px" width="80%" height="250px">
                    <Grid className="grid-parcour-detail">
                        <AppsRounded className="icon-parcour-detail" />
                        <Text alignSelf="start" justifySelf="center" size="20px" textAlign="center">{dataSelect.description}</Text>
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