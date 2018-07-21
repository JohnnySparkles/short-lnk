import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid-2';


export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function() {
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  'links.insert': function(url) {

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema ({
      url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: 'Your link',
      }
    }).validate({url});

    const id = shortid.generate();
    return Links.insert({
      _id: id,
      url: url,
      userId: this.userId});
  }
});


