import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from './../api/links';
import { withTracker } from 'meteor/react-meteor-data';


class LinksListImpl extends React.Component {
  render() {
    return (
        <div>
          <p>Links List</p>
          {this.props.links.map((link)=> {
            return <p key={link._id}>{link.url}</p>;
          })}
        </div>
    );
  }
}

export default LinksList = withTracker(({}) => {
  const linksHandle = Meteor.subscribe('links');
  const links = Links.find({}).fetch();

  return {links: links};
})(LinksListImpl);
