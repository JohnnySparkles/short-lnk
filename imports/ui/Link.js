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
    this.setState({visible: !this.state.visible});
    Session.set("showVisible", this.state.visible);
  }

  render() {
    let btnText = "Visible";

    if (this.state.visible) {
      btnText = "Hidden";
    }

    return (<button onClick={this.toggleVisible.bind(this)}>Show {btnText}</button>);
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




