// Package Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

// Application Imports
import { AppRouter } from './../imports/routes/AppRouter';
import './main.html';



Meteor.startup(() => {
  Meteor.call('greetUser', (err, res) => {
    console.log('Greet User Arguments', err, res);
  });
  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
});


