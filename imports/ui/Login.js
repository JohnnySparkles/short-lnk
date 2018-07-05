// Module imports
import React from 'react';
import {Link} from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {error: ''};
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login callback', err);
      this.setState({error: err});
    });
  }

  render () {
    return (
      <div>
        <h1>Login to Short Lnk</h1>

        <form onSubmit={this.onSubmit.bind(this)}>
          {this.state.error !== '' ? <p>{this.state.error}</p> : undefined}
          <input type="email" ref="email" name="email" id="email"/>
          <input type="password" ref="password" name={"password"} id={"password"}/>
          <button>Login</button>
        </form>
        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
}

