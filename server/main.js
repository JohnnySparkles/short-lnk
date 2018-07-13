import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import '../imports/api/links';


Meteor.startup(() => {
  Meteor.call('greetUser', (err, res) => {
    console.log('Greet User Arguments', err, res);
  });
});
