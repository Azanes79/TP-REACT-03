import React from 'react';
import {Grommet, Box} from 'grommet';
import './App.css';
import Navigation from './features/navigation/Navigation';
import Header from './features/header/Header';
import QuiSuisJe from './features/quiSuisJe/QuiSuisJe';
import Parcour from './features/parcour/Parcour';
import Competence from './features/competence/Competence'

function App() {
  return (
    <Grommet full plain>
      <Box fill="vertical">
        <Navigation/>
        <Header />
        <QuiSuisJe />
        <Parcour />
        <Competence />
      </Box>
    </Grommet>
  );
}

export default App;
