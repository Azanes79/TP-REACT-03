import React from 'react'
import { Nav, Button, Text, Box } from 'grommet'
import { Send, Technology } from 'grommet-icons'
import './Navigation.css'

const Navigation = () => {
    return (
        <Nav background="neutral-3" align="center" direction="row" justify="between" pad="small" gap="small" width="100%">
            <Box gap="10px" direction="row" justify="between" align="center">
                <Technology></Technology>
                <Text>Alexis LEMARCHAND</Text>
            </Box>
            <Button label="Me Contacter" icon={<Send />} active={false} color="#1e3a8c" />
        </Nav>
    );
}

export default Navigation;