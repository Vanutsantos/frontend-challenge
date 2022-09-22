import React from 'react';
import RoutesComponent from './presentation/components/Routes';
import { GlobalStyle } from './presentation/styles/global';

const App = ():JSX.Element => (
  <>
    <GlobalStyle />
    <RoutesComponent />
  </>
)

export default App;
