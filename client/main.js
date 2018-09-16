// Package Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

// Application Imports
import { AppRouter } from './../imports/routes/AppRouter';
import './main.html';
import '../imports/startup/simple-schema-configuration';


Meteor.startup(() => {
  Session.set('showVisible', true);

  ReactDOM.render(<AppRouter />, document.getElementById('app'));
});


