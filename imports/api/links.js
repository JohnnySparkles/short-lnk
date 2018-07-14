import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Links = new Mongo.Collection('links');


if (Meteor.isServer) {
  Meteor.publish('links', function() {
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  'links.insert': function(url) {

    console.log('links.insert');

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return Links.insert({url, userId: this.userId});
  }
});
