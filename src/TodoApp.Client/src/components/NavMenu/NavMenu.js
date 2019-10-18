import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./NavMenu.scss";

export class NavMenu extends Component {
  render() {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Todo App</div>
          <div className="list-group list-group-flush">
            <NavLink to="today" className="list-group-item list-group-item-action bg-light">
              Today
            </NavLink>
            <NavLink to="tomorrow" className="list-group-item list-group-item-action bg-light">
              Today
            </NavLink>
          </div>
      </div>
    );
  }
}
