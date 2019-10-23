import React, { Component } from 'react';
import SideNav from './components/SideNav/SideNav';

export default class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div id="wrapper" className="d-flex">
        <SideNav />
        <div id="page-content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
