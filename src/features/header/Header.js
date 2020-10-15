import React from 'react'
import { Box, Grid, Avatar, Text } from 'grommet'
import avatar from '../..//shared/img/avatar.svg'
import './Header.css'

const Header = () => {
    return (
        <Box background="#009d55" height="500px" align="center" justify="center">
            <Grid className="div-grid" >
                <Box animation={{"type":"slideRight","delay":500,"duration":1000,"size":"xlarge"}}>
                    <Text className="text-header">étudiant</Text>
                </Box>

                <Avatar src={avatar} size="xlarge"></Avatar>
                <Box  id="trois" animation={{"type":"slideLeft","delay":500,"duration":1000,"size":"xlarge"}}>
                    <Text className="text-header">Développeur WEB</Text>
                </Box>

            </Grid>
        </Box>
    );
}

export default Header;