import React from 'react';
import { Session } from 'meteor/session';

export default () => {
  return (
        <div>
          <label>
            <input id="id_visible" type="checkbox" onChange={(e) => {
               Session.set('showVisible', !e.target.checked);
            }}/>
            Show Hidden
          </label>
        </div>
    );
}

