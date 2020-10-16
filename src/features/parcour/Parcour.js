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
            <Stack guidingChild={1} alignSelf="center">
                <Diagram
                    connections={[
                        {
                            fromTarget: '1',
                            toTarget: '2',
                            thickness: 'xsmall',
                            color: 'accent-2',
                        },
                        {
                            fromTarget: '2',
                            toTarget: '3',
                            thickness: 'xsmall',
                            color: 'accent-2',
                            type: 'rectilinear',
                        },
                        {
                            fromTarget: '3',
                            toTarget: '4',
                            thickness: 'xsmall',
                            color: 'accent-2',
                            type: 'rectilinear',
                        }
                    ]}
                />
                <Box direction={size === "small" ? "column" : "row"}>
                    <Box id="1" margin="small" pad="medium" background="light-4" itemID={data[0].id} onClick={() => setDataSelect(data[0])}><Text textAlign="center">{data[0].name}</Text></Box>
                    <Box id="2" margin="small" pad="medium" background="light-4" itemID={data[1].id} onClick={() => setDataSelect(data[1])}><Text textAlign="center">{data[1].name}</Text></Box>
                    <Box id="3" margin="small" pad="medium" background="light-4" itemID={data[2].id} onClick={() => setDataSelect(data[2])}><Text textAlign="center">{data[2].name}</Text></Box>
                    <Box id="4" margin="small" pad="medium" background="light-4" itemID={data[3].id} onClick={() => setDataSelect(data[3])}><Text textAlign="center">{data[3].name}</Text></Box>
                </Box>
            </Stack>
            <Grid className="grid-parcour" fill="horizontal">
                <Box>
                    <Certificate />
                    <Text>{dataSelect.name}</Text>
                </Box>
                <Box>
                    <AppsRounded />
                    <Text>{dataSelect.description}</Text>
                </Box>
                <Box>
                    <Location />
                    <Text>{dataSelect.lieu}</Text>
                </Box>
                <Box>
                    <Calendar />
                    <Text>{dataSelect.date}</Text>
                </Box>
            </Grid>
        </Box>
    );
}

export default Parcour;