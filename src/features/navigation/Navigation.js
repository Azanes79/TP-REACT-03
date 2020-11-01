import React from 'react'
import { Nav, Button, Text, Box, ResponsiveContext } from 'grommet'
import { Link } from "react-router-dom";
import { Send } from 'grommet-icons'
import './Navigation.css'
import SelectMode from '../color-mode/SelectMode'

import { useSelector } from 'react-redux';
import {
    getMode
} from '../color-mode/ColorMode';

const Navigation = () => {
    const size = React.useContext(ResponsiveContext);

    return (

        <Nav className={useSelector(getMode) ? 'background-light' : 'background-dark'} align="center" direction="row" justify="between" pad="small" gap="small" width="100%">
            <Link to="/" className="nav-text-decoration">
                <Box gap="10px" direction="row" justify="between" align="center">
                    <Text color="white">Alexis LEMARCHAND</Text>
                </Box>
            </Link>
            <Box direction="row" gap="50px">
                <SelectMode />
                <Link to="/contact" color="white">
                    <Button label="Me Contacter" className="button" icon={size === "small" ? null : <Send color="white" />} active={false} color="white" />
                </Link>
            </Box>

        </Nav>
    );
}

export default Navigation;