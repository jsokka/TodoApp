import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ProjectNav from "../Projects/ProjectNav";
import ProjectEditModal from "../Projects/ProjectEditModal";
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
  constructor(props) {
    super(props);

    this.state = {
      showAddProjectModal: false
    };
  }

  handleAddProjectClick = () => {
    this.setState({ showAddProjectModal: true });
  }

  handleHideAddProjectModal = () => {
    this.setState({ showAddProjectModal: false });
  };

  render() {
    return (
      <Fragment>
        {this.state.showAddProjectModal &&
          <ProjectEditModal
            onCancelClick={this.handleHideAddProjectModal}
          />
        }
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Todo App</div>
            <div className="list-group list-group-flush">
              <NavLink to="/all" className="list-group-item list-group-item-action bg-light">
                All tasks
              </NavLink>
              <QueryRenderer 
                environment={environment}
                query={ProjectsQuery}
                render={({ error, props }) => {
                  if (props) {
                    return <ProjectNav projects={props.projects} onAddProjectClick={this.handleAddProjectClick} />
                  }
                }}
              />
            </div>
        </div>
      </Fragment>
    );
  }
}

export default SideNav;
