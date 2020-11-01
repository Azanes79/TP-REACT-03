import React from 'react';
import { Box, Grid, Image, Heading, ResponsiveContext, Meter } from 'grommet';
import html from '../../shared/img/HTML.svg';
import js from '../../shared/img/JS.svg';
import css from '../../shared/img/CSS.svg';
import angular from '../../shared/img/angular.svg';
import react from '../../shared/img/react.svg';
import bdd from '../../shared/img/database.svg';
import './Competence.css';

import { useSelector } from 'react-redux';
import {
    getMode
} from '../color-mode/ColorMode';

const Competence = () => {
    const size = React.useContext(ResponsiveContext);
    let backgroundMeter;
    let colorMeter;
    if(useSelector(getMode)) {
        backgroundMeter = '#254030';
        colorMeter = '#009d55';
    } else {
        backgroundMeter = 'black';    
        colorMeter = '#1b1b1b';
    }
    
    return (
        <Grid className={useSelector(getMode) ? size === "small" ? "grid-competence-small" : "grid-competence" : size === "small" ? "grid-competence-small background-second-dark color-light" : "grid-competence background-second-dark color-light"}>
            <Heading className={size === "small" ? "" : "title-competence"} textAlign="center">
                Mes compétences
            </Heading>
            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={html} width="150px" height="150px" />
                </Box>
                <Meter background={backgroundMeter}  round={true} values={[{  value: 100, color: colorMeter, highlight: true, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>
            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={angular} width="100px" height="100px" />
                </Box>
                <Meter background={backgroundMeter} round={true} values={[{ value: 70, color: colorMeter, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>

            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={js} width="150px" height="150px" />
                </Box>
                <Meter background={backgroundMeter} round={true} values={[{ value: 70, color: colorMeter, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>
            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={react} width="200px" height="200px" />
                </Box>
                <Meter background={backgroundMeter} round={true} values={[{ value: 20, color: colorMeter, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>

            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={css} width="150px" height="150px" />
                </Box>
                <Meter background={backgroundMeter} round={true} values={[{ value: 100, color: colorMeter, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>

            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={bdd} width="100px" height="100px" />
                </Box>
                <Meter background={backgroundMeter} round={true} values={[{ value: 70, color: colorMeter, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>
        </Grid>
    );
}

export default Competence;