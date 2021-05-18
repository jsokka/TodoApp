import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Container, Spinner, Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProjectNav from "../Projects/ProjectNav";
import { ProjectEditModal } from "../Projects/ProjectEditModal";
import environment from "../../graphql/environment";
import { AddProjectMutation } from "../../graphql/mutations/Mutations";
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
      showAddProjectModal: false,
      addProjectModalSaving: false
    };
  }

  handleAddProjectClick = () => {
    this.setState({ showAddProjectModal: true });
  }

  handleHideAddProjectModal = () => {
    this.setState({ showAddProjectModal: false, addProjectModalSaving: false });
  };

  handleSaveAddProject = (project) => {
    this.setState({ addProjectModalSaving: true});
    AddProjectMutation(project.name, project.description, project.deadline, (projectId, errors) => {
      this.setState({ addProjectModalSaving: false });
      if (!errors) {
        console.log(`Project ${projectId} created`);
        this.handleHideAddProjectModal();
        setTimeout(() => { 
          this.props.history.push(`/project/${projectId}`);
        }, 500);
      }
    });
  };

  render() {
    const { onToggleNav, isToggled } = this.props;
    const { addProjectModalSaving } = this.state;
    const toggleIcon = isToggled ? faArrowLeft : faBars;
    return (
      <Fragment>
        {this.state.showAddProjectModal &&
          <ProjectEditModal
            saving={addProjectModalSaving}
            onCancelClick={this.handleHideAddProjectModal}
            onSaveClick={this.handleSaveAddProject}
          />
        }
        <div className="bg-light border-right" id="sidebar-wrapper">
          <Button variant="light" id="toggle-nav-button" onClick={onToggleNav}>
            <Icon icon={toggleIcon} />
          </Button>
          <div className="sidebar-heading">Todo App</div>
          <div className="list-group list-group-flush">
            <NavLink to="/" exact className="list-group-item list-group-item-action bg-light">
              All tasks
            </NavLink>
            <Container className="separator text-center">
              Projects
              <Button size="sm" variant="light" className="float-right" onClick={this.handleAddProjectClick}>
                <Icon icon={faPlus} /> 
              </Button>
            </Container>
            <QueryRenderer 
              environment={environment}
              query={ProjectsQuery}
              render={({ error, props }) => {
                if (error) {
                  return (
                    <Alert className="mt-3" variant="danger">
                      <Alert.Heading>Error occured</Alert.Heading>
                      <code>Error message: {error.message}</code>
                    </Alert>
                  )
                }
                if (props) {
                  return <ProjectNav projects={props.projects} onAddProjectClick={this.handleAddProjectClick} />
                }
                return (<div className="text-center mt-3"><Spinner animation="grow" /></div>)
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SideNav);
