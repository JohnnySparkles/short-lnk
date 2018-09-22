import React from 'react';
import { Session } from 'meteor/session';

export default class LinksListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showVisible: true,
    }
  }

  componentDidMount() {
    this.visibleTracker = Tracker.autorun(() => {
      const showVisible = Session.get('showVisible');

      this.setState({showVisible: showVisible});
    });
  }

  componentWillUnmount() {
    this.visibleTracker.stop();
  }

  render() {
    return (
        <div>
          <label>
            <input id="id_visible" checked={!this.state.showVisible} type="checkbox" onChange={(e) => {
              Session.set("showVisible", !e.target.checked);
            }}/>
            Show Hidden
          </label>
        </div>
    );
  }
}

