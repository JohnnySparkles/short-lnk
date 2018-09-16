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
  'links.insert': function (url) {

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
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
      userId: this.userId,
      visible: true
    });
  },
  'links.setVisibility'(id, visible) {

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    const link = Links.findOne({_id: id});
    if (!link) {
      throw new Meteor.Error('not-found');
    }

    if (link.userId !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      id: {
        type: String,
        min: 1,
      },
      visible: {
        type: Boolean,
      }
    }).validate({id, visible});

    return Links.update({_id: id, userId: this.userId}, {$set: {visible: visible}});
  },
});


