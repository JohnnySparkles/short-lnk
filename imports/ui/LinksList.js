import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from './../api/links';
import { withTracker } from 'meteor/react-meteor-data';
import LinksListItem from './LinksListItem';
import { Session } from 'meteor/session';


class LinksListImpl extends React.Component {
  renderLinksListItems() {
    if (this.props.links.length === 0) {
      return (
          <div className="item">
            <p className="item__status-message">No links found</p>
          </div>);
    }

    return this.props.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} {...link} shortUrl={shortUrl} />
    });
  }

  render() {
    return (
        <div>
          {this.renderLinksListItems()}
        </div>
    );
  }
}

export default LinksList = withTracker(({}) => {
  const linksHandle = Meteor.subscribe('links');
  const visible = Session.get('showVisible');

  let filter = {};
  if (visible) {
    filter = {visible: visible};
  }

  const links = Links.find(filter).fetch();

  return {links: links, linksHandle};
})(LinksListImpl);
