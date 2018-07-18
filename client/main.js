// Package Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

// Application Imports
import { AppRouter } from './../imports/routes/AppRouter';
import './main.html';
import '../imports/startup/simple-schema-configuration';


Meteor.startup(() => {
  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
});


