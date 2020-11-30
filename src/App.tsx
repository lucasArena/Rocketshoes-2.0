import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/global';
import darkTheme from './styles/themes/dark';

const App: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <Routes />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
