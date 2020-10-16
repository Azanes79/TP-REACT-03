import React from 'react'
import { Nav, Button, Text, Box, ResponsiveContext } from 'grommet'
import { Send, Technology } from 'grommet-icons'
import './Navigation.css'

const Navigation = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Nav background="#009d55" align="center" direction="row" justify="between" pad="small" gap="small" width="100%">
            <Box gap="10px" direction="row" justify="between" align="center">
                <Text>Alexis LEMARCHAND</Text>
            </Box>
            <Technology></Technology>
            <Button label="Me Contacter" icon={size === "small" ? null : <Send />} active={false} color="#1f461d" />
        </Nav>
    );
}

export default Navigation;