import React from 'react'
import {Grommet, Main} from 'grommet';
import './App.css';
import Navigation from './features/navigation/Navigation';

const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#ffffff",
        "dark": "#000000"
      }
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}

function App() {
  return (
    <Grommet full theme={theme}>
      <Main fill="vertical" flex="grow" overflow="auto">
        <Navigation/>
      </Main>
    </Grommet>
  );
}

export default App;
