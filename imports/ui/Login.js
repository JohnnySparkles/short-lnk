// Module imports
import React from 'react';
import {Link} from 'react-router-dom';
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
      if (err) {
        this.setState({error: err.reason});
      }
      else {
        this.setState({error: ''});
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Login to Short Lnk</h1>

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          {this.state.error !== '' ? <p>{this.state.error}</p> : undefined}
          <input type="email" ref="email" name="email" id="email"/>
          <input type="password" ref="password" name={"password"} id={"password"}/>
          <button>Login</button>
        </form>
        <Link to="/signup">Don't have an account?</Link>
      </div>
    );
  }
}

