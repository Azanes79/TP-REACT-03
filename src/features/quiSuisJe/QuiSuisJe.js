import React from 'react';
import { Box, Heading, Text, Grid, Image } from 'grommet';
import './QuiSuisJe.css';
import computer from '../../shared/img/computer.svg'
const QuiSuiJe = () => {
    return (
        // <Box fill="horizontal" align="center" justify="center">
            <Grid className="grid-qui-suis-je">
                <Heading id="qui-un">
                    Qui suis-je ?
                </Heading>
                <Text className="description" id="qui-deux">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut vulputate velit, vitae tempor elit. Proin dui mauris, efficitur non nulla ac, luctus finibus lorem. Etiam dui nibh, feugiat vel mattis a, convallis et lacus. Cras laoreet felis egestas augue rhoncus tempor. Vestibulum lectus turpis, ullamcorper ut ante a, mattis convallis sem. Morbi rhoncus sed sapien in volutpat. Duis et malesuada justo. Proin porta commodo nisi quis gravida. Nunc cursus tortor sed velit placerat, non sodales nunc molestie. Sed sed risus nunc. Cras ut pretium lectus, porttitor convallis leo. Proin finibus neque quis diam pulvinar, at lacinia augue tempus. Quisque cursus volutpat nunc nec sagittis. Duis lacus magna, dapibus in dui nec, rhoncus ornare purus. Etiam lacinia blandit velit, sit amet bibendum dui facilisis id.
                </Text>
                <Box height="small" width="small" id="qui-trois">
                    <Image
                        fit="cover"
                        src={computer}
                    />
                </Box>
                <Box height="small" width="small" id="qui-quatre">
                    <Image
                        fit="cover"
                        src={computer}
                    />
                </Box>
                <Text className="description" id="qui-cinq">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut vulputate velit, vitae tempor elit. Proin dui mauris, efficitur non nulla ac, luctus finibus lorem. Etiam dui nibh, feugiat vel mattis a, convallis et lacus. Cras laoreet felis egestas augue rhoncus tempor. Vestibulum lectus turpis, ullamcorper ut ante a, mattis convallis sem. Morbi rhoncus sed sapien in volutpat. Duis et malesuada justo. Proin porta commodo nisi quis gravida. Nunc cursus tortor sed velit placerat, non sodales nunc molestie. Sed sed risus nunc. Cras ut pretium lectus, porttitor convallis leo. Proin finibus neque quis diam pulvinar, at lacinia augue tempus. Quisque cursus volutpat nunc nec sagittis. Duis lacus magna, dapibus in dui nec, rhoncus ornare purus. Etiam lacinia blandit velit, sit amet bibendum dui facilisis id.
                </Text>
            </Grid>
        // </Box>
    );
}

export default QuiSuiJe;