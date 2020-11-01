import React from 'react';
import { Box, Grid, Avatar, Text, ResponsiveContext } from 'grommet';
import avatar from '../..//shared/img/avatar.svg';
import './Header.css';

import { useSelector } from 'react-redux';
import {
    getMode
} from '../color-mode/ColorMode';

const Header = () => {
    const size = React.useContext(ResponsiveContext);
    return (
        <Box fill="horizontal" className={useSelector(getMode) ? 'background-light color-light' : 'background-dark color-light'} height="500px" id="box-header" align="center" justify="center">
            <Grid className={size === "small" ? "grid gap" : "grid normal-grid"}>
                <Box animation={{ "type": "slideRight", "delay": 500, "duration": 1000, "size": "xlarge" }}>
                    <Text className="text-header">étudiant</Text>
                </Box>

                <Avatar src={avatar} size="xlarge"></Avatar>
                <Box id="trois" gap="10px" align="center" animation={{ "type": "slideLeft", "delay": 500, "duration": 1000, "size": "xlarge" }}>
                    <Text className="text-header">Développeur</Text>
                    <Text className="text-header">WEB</Text>
                </Box>
            </Grid>
        </Box>
    );
}

export default Header;