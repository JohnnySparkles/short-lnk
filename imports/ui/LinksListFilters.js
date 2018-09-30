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
          <label className="checkbox">
            <input id="id_visible" className="checkbox__box" checked={!this.state.showVisible} type="checkbox" onChange={(e) => {
              Session.set("showVisible", !e.target.checked);
            }}/>
            Show Hidden
          </label>
        </div>
    );
  }
}

