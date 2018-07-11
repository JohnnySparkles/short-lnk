import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Links } from './../api/links';


class LinksListImpl extends React.Component {
  render () {
    return (
        <div>
          <p>Links List</p>
          {this.props.links.map((link)=> {
            return <p>Link: {link.url}</p>;
          })}
        </div>
    );
  }
}


export default LinksList = withTracker(({}) => {
  return {links: Links.find().fetch()};
})(LinksListImpl);
