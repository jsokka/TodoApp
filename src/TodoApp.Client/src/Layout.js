import React, { Component } from 'react';
import { NavMenu } from './components/NavMenu/NavMenu';

export default class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div id="wrapper" className="d-flex">
        <NavMenu />
        {this.props.children}
      </div>
    );
  }
}
