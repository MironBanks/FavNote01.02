import React from 'react';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../Theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Miron</h1>
    <Button width="500px">Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
