import React from 'react';
import { Box, Heading, Text, Grid, Image, ResponsiveContext } from 'grommet';
import './QuiSuisJe.css';
import computer from '../../shared/img/computer.svg'
const QuiSuiJe = () => {
    const size = React.useContext(ResponsiveContext);
    return (
        <Grid className={size === "small" ? "grid-qui-suis-je" : "grid-qui-suis-je grid-normal"}>
            <Heading className={size === "small" ? "" : "qui-un"}>
                Qui suis-je ?
            </Heading>
            <Text className={size === "small" ? "description" : "description qui-deux"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut vulputate velit, vitae tempor elit. Proin dui mauris, efficitur non nulla ac, luctus finibus lorem. Etiam dui nibh, feugiat vel mattis a, convallis et lacus. Cras laoreet felis egestas augue rhoncus tempor. Vestibulum lectus turpis, ullamcorper ut ante a, mattis convallis sem. Morbi rhoncus sed sapien in volutpat. Duis et malesuada justo. Proin porta commodo nisi quis gravida. Nunc cursus tortor sed velit placerat, non sodales nunc molestie. Sed sed risus nunc. Cras ut pretium lectus, porttitor convallis leo. Proin finibus neque quis diam pulvinar, at lacinia augue tempus. Quisque cursus volutpat nunc nec sagittis. Duis lacus magna, dapibus in dui nec, rhoncus ornare purus. Etiam lacinia blandit velit, sit amet bibendum dui facilisis id.
            </Text>
            <Box height="small" width="small" className={size === "small" ? "" : "qui-trois"}>
                <Image
                    fit="cover"
                    src={computer}
                />
            </Box>
            <Text className={size === "small" ? "description" : "description qui-cinq"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut vulputate velit, vitae tempor elit. Proin dui mauris, efficitur non nulla ac, luctus finibus lorem. Etiam dui nibh, feugiat vel mattis a, convallis et lacus. Cras laoreet felis egestas augue rhoncus tempor. Vestibulum lectus turpis, ullamcorper ut ante a, mattis convallis sem. Morbi rhoncus sed sapien in volutpat. Duis et malesuada justo. Proin porta commodo nisi quis gravida. Nunc cursus tortor sed velit placerat, non sodales nunc molestie. Sed sed risus nunc. Cras ut pretium lectus, porttitor convallis leo. Proin finibus neque quis diam pulvinar, at lacinia augue tempus. Quisque cursus volutpat nunc nec sagittis. Duis lacus magna, dapibus in dui nec, rhoncus ornare purus. Etiam lacinia blandit velit, sit amet bibendum dui facilisis id.
            </Text>
            <Box height="small" width="small" className={size === "small" ? "" : "qui-quatre"}>
                <Image
                    fit="cover"
                    src={computer}
                />
            </Box>
        </Grid>
    );
}

export default QuiSuiJe;