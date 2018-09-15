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


Tracker.autorun(() => {
  const name = Session.get('name');
  console.log('Name: ', name);
});

Session.set('name', 'Andrew Mead');

Meteor.startup(() => {
  ReactDOM.render(<AppRouter />, document.getElementById('app'));
});


