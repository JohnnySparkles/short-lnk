import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';


export default class AddLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      insertErr: undefined,
      url: 'John was here',
    };
  }

  onChange(e) {
    this.setState({url: e.target.value.trim()});
  }

  onSubmit(e) {
    const url = this.refs.url.value.trim();
    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        this.setState({insertErr: err});
      });
      this.refs.url.value = '';
    }
  }

  render () {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type={"text"} ref={"url"} placeholder={"URL"} onChange={this.onChange.bind(this)} value={this.state.url}/>
          {this.state.insertErr ? <p>{this.state.insertErr.reason}</p> : undefined}
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}




