import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ProjectNav from "../Projects/ProjectNav";
import environment from "../../graphql/environment";
import "./SideNav.scss";

const ProjectsQuery = graphql`
  query SideNavProjectsQuery {
    projects {
      ...ProjectNav_projects
    }
  }
`;

class SideNav extends Component {
  render() {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Todo App</div>
          <div className="list-group list-group-flush">
            <NavLink to="/today" className="list-group-item list-group-item-action bg-light">
              Today
            </NavLink>
            <QueryRenderer 
              environment={environment}
              query={ProjectsQuery}
              render={({ error, props }) => {
                if (props) {
                  return <ProjectNav projects={props.projects} />
                }
              }}
            />
          </div>
      </div>
    );
  }
}

export default SideNav;
