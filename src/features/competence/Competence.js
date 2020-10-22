import React from 'react';
import { Box, Grid, Image, Heading, ResponsiveContext, Meter } from 'grommet';
import html from '../../shared/img/HTML.svg';
import js from '../../shared/img/JS.svg';
import css from '../../shared/img/CSS.svg';
import angular from '../../shared/img/angular.svg';
import react from '../../shared/img/react.svg';
import bdd from '../../shared/img/database.svg';
import './Competence.css';

const Competence = () => {
    const size = React.useContext(ResponsiveContext);
    return (
        <Grid className={size === "small" ? "grid-competence-small" : "grid-competence"}>
            <Heading className={size === "small" ? "" : "title-competence"} textAlign="center">
                Mes compétences
            </Heading>
            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={html} width="150px" height="150px" />
                </Box>
                <Meter background="#254030" round={true} values={[{ value: 100, color: "#009d55", highlight: true, label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>
            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={angular} width="100px" height="100px" />
                </Box>
                <Meter background="#254030" round={true} values={[{ value: 70, color: "#009d55", label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>

            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={js} width="150px" height="150px" />
                </Box>
                <Meter background="#254030" round={true} values={[{ value: 70, color: "#009d55", label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>
            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={react} width="200px" height="200px" />
                </Box>
                <Meter background="#254030" round={true} values={[{ value: 20, color: "#009d55", label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>

            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={css} width="150px" height="150px" />
                </Box>
                <Meter background="#254030" round={true} values={[{ value: 100, color: "#009d55", label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>

            <Box align="center" justify="around" direction="row">
                <Box width="200px" height="200px" justify="center" align="center">
                    <Image src={bdd} width="100px" height="100px" />
                </Box>
                <Meter background="#254030" round={true} values={[{ value: 70, color: "#009d55", label: 'sixty', onClick: () => { } }]} aria-label="meter" />
            </Box>
        </Grid>
    );
}

export default Competence;