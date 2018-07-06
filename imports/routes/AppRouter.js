import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from './../ui/Login';
import Link from './../ui/Link';
import Signup from './../ui/Signup';
import NotFound from './../ui/NotFound';

export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute path="/links" component={Link} />
      <PublicRoute path="/signup" component={Signup}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
