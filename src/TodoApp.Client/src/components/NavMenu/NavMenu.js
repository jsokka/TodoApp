import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./NavMenu.scss";

export class NavMenu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to={"/"}>TodoApp</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/tasks?day=today'}>
              <Nav.Link>
                Today
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/counter2'}>
              <Nav.Link>
                Counter
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
