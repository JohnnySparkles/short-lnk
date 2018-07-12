import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from './../api/links';


export default class LinksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find().fetch();
      this.setState({links});
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  render () {
    return (
        <div>
          <p>Links List</p>
          {this.state.links.map((link)=> {
            return <p key={link._id}>{link.url}</p>;
          })}
        </div>
    );
  }
}


