import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import moment from 'moment';


export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {copied: false};

  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.copy);

    this.clipboard.on("success", () => {
      this.setState({copied: true});
      setTimeout(() => this.setState({copied: false}), 1000);
    }).on("error", () => {
      alert("Failed to copy the text");
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;

    if (typeof this.props.lastVisited === 'number') {
      visitedMessage = `(visited ${moment(this.props.lastVisited).fromNow()})`;;
    }

    return <p>{this.props.visitedCount} {visitMessage} {visitedMessage}</p>;
  }

  render() {
    let copyText = this.state.copied ? "Copied" : "Copy";

    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        {this.renderStats()}
        <a href={this.props.shortUrl} target="_blank">Visit</a>
        <button ref={(input) => {this.copy = input}} data-clipboard-text={this.props.shortUrl}>{copyText}</button>
        <button onClick={() => {Meteor.call('links.setVisibility',
                                            this.props._id, !this.props.visible)}}>
          {this.props.visible ? 'Hide' : 'Unhide'}</button>
      </div>
    );
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisited: PropTypes.number,
};
