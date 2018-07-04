import React from 'react';
import {Link as RouterLink} from 'react-router-dom';


export default class Link extends React.Component {
  render () {
    return (
      <div>
        <h1>Links page</h1>
        <RouterLink to="/">Logout</RouterLink>
      </div>
    );
  }
}
