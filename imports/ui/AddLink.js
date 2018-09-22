import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      insertErr: undefined,
      url: '',
      isOpen: false,
    };
  }

  onChange(e) {
    this.setState({url: e.target.value.trim()});
  }

  onSubmit(e) {
    const { url } = this.state;
    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        this.setState({insertErr: err});
        if (!err) {
          this.setState({url: '', isOpen: false});
        }
      });
    }
  }

  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({isOpen: true})
        }}>+ Add Link</button>
        <Modal isOpen={this.state.isOpen} contentLabel="Add link">
          <p>Add Link</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type={"text"} ref={"url"} placeholder={"URL"} onChange={this.onChange.bind(this)} value={this.state.url}/>
            {this.state.insertErr ? <p>{this.state.insertErr.reason}</p> : undefined}
            <button>Add Link</button>
          </form>
          <button onClick={() => {
            this.setState({isOpen: false, url: ''});
          }}>Cancel</button>
        </Modal>
      </div>
    );
  }
}




