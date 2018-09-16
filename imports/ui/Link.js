import React from 'react';
import LinksList from './../ui/LinksList';
import PrivateHeader from './../ui/PrivateHeader';
import AddLink from './../ui/AddLink';


class ToggleVisible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visible: true};
  }

  toggleVisible() {
    const visible = !this.state.visible;
    this.setState({visible: visible});
    Session.set("showVisible", visible);
  }

  render() {
    return (
        <div>
          <label for="id_visible">Show Hidden</label>
          <input id="id_visible" type="checkbox" checked={!this.state.visible} onClick={this.toggleVisible.bind(this)}/>
        </div>
    );
  }
}


export default Link = () => {
  return (
    <div>
      <PrivateHeader title={"Your links"}/>
      <LinksList />
      <AddLink />
      <ToggleVisible />
    </div>
  );
}




