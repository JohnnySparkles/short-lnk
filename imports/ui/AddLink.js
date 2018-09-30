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
      error: '',
    };
  }

  onChange(e) {
    this.setState({url: e.target.value.trim()});
  }

  onSubmit(e) {
    const { url } = this.state;
    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
      this.setState({insertErr: err});
      if (!err) {
        this.setState({url: '', isOpen: false, error: ''});
      }
      else {
        this.setState({ error: err.reason })
      }
    });
  }

  handleModalClose() {
    this.setState({isOpen: false, url: '', error: ''});
  }

  render () {
    return (
      <div>
        <button className="button" onClick={() => {this.setState({isOpen: true})}}>+ Add Link</button>
        <Modal isOpen={this.state.isOpen}
               contentLabel="Add link"
               onAfterOpen={() => {
                 this.refs.url.focus();
               }}
               onRequestClose={this.handleModalClose.bind(this)}
               className="boxed-view__box"
               overlayClassName="boxed-view boxed-view__modal">
          <h1>Shorten Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : ''}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
            <input type="text"
                   ref="url"
                   placeholder="URL"
                   onChange={this.onChange.bind(this)}
                   value={this.state.url}/>
            <button className="button">Add Link</button>
            <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}




