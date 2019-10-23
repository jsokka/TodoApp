import React, { Component } from 'react';
import SideNav from './components/SideNav/SideNav';

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isToggled: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleToggleNav = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  };

  handleResize = (event) => {
    if (this.state.isToggled && event.target.innerWidth > 768) {
      this.setState({ isToggled: false });
    }
  };

  render() {
    return (
      <div id="wrapper" className={`d-flex ${this.state.isToggled && " toggled"}`}>
        <SideNav onToggleNav={this.handleToggleNav} isToggled={this.state.isToggled} />
        <div id="page-content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
