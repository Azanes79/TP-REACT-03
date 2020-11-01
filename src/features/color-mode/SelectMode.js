import React from 'react';
import Toggle from 'react-toggle';
import { useSelector, useDispatch } from 'react-redux';
import {
    getMode,
    changeMode
} from './ColorMode';
import "react-toggle/style.css";
import { Sun, Moon } from 'grommet-icons';
import { Box } from 'grommet';
import './SelectMode.css';

const SelectMode = () => {
    const dispatch = useDispatch();
    return (
        <Box direction="row" align="center">
            <Moon color="white" />
            <Toggle
                defaultChecked={useSelector(getMode)}
                className='custom'
                icons={false}
                onChange={() => dispatch(changeMode())} />
            <Sun color="white"/>
        </Box>
    );
}

export default SelectMode;