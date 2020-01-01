import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
