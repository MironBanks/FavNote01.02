import React from 'react';
import { TheamProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../Theme/GlobalStyle';

// First ThemeProvider - color => black
const theme = {
  primary: 'black',
};
// bacground-color: ${(props) => props.theme.primary};
// End ThemeProvider

const Root = () => (
  <div>
    <GlobalStyle />
    <TheamProvider theme={theme}>
      <>
        <h1>Hello Miron</h1>
        <Button width="500px">Close / Save</Button>
        <Button secondary>Remove</Button>
      </>
    </TheamProvider>
  </div>
);

export default Root;
