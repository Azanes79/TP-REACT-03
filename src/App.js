import React from 'react';
import {Grommet, Main} from 'grommet';
import './App.css';
import Navigation from './features/navigation/Navigation';
import Header from './features/header/Header';
import QuiSuisJe from './features/quiSuisJe/QuiSuisJe';

function App() {
  return (
    <Grommet full>
      <Main fill="vertical" flex="grow" overflow="auto">
        <Navigation/>
        <Header />
        <QuiSuisJe></QuiSuisJe>
      </Main>
    </Grommet>
  );
}

export default App;
