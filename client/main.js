
// Package Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './../imports/routes/AppRouter';
import { Tracker } from 'meteor/tracker';

// Application Imports
import './main.html';

Meteor.startup(() => {
  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
});


