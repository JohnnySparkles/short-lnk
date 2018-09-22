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

function checkLoggedIn(userId) {
  if (!userId) {
    throw new Meteor.Error('not-authorized');
  }
}

function checkEditAuthorized(id, userId) {

  checkLoggedIn(userId);

  const link = Links.findOne({_id: id});
  if (!link) {
    throw new Meteor.Error('not-found');
  }

  if (link.userId !== userId) {
    throw new Meteor.Error('not-authorized');
  }

  return link;
}

Meteor.methods({
  'links.insert': function (url) {

    checkedLoggedIn(this.userId);

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
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null,
    });
  },
  'links.setVisibility'(id, visible) {

    checkEditAuthorized(userId, id);

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
  'links.incrementVisited'(id) {
    const link = checkEditAuthorized(userId, id);
    const visited = link.visited++;
    const lastVisited = new Date();

    return Links.update({_id: id, userId: this.userId}, {$set: {visitedCount: visited, lastVisited: lastVisited}});
  }
});


