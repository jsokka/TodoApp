import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router'
import { QueryRenderer } from "react-relay";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskEditModal from "./TaskEditModal";
import ProjectHeader from "../Projects/ProjectHeader";
import { ProjectEditModalWithFragment } from "../Projects/ProjectEditModal";
import "./Tasks.scss";
import environment from "../../graphql/environment";
import graphql from "babel-plugin-relay/macro";
import {
  AddTaskMutation, 
  ToggleTaskCompletedMutation,
  UpdateTaskMutation,
  DeleteTaskMutation, 
  UpdateProjectMutation,
  DeleteProjectMutation
} from "../../graphql/mutations/Mutations";

export const priorityMap = {
  "LOW": { label: "Low", badgeVariant: "light" },
  "NORMAL": { label: "Normal", badgeVariant: "primary" },
  "HIGH": { label: "High", badgeVariant: "warning" },
  "VERY_HIGH": { label: "Very High", badgeVariant: "danger" },
};

const AllTasksQuery = graphql`
  query TasksAllTasksQuery {
    tasks {
      ...TaskList_tasks
    }
  }
`;

const ProjectTasksQuery = graphql`
  query TasksProjectTasksQuery($projectId: ID!) {
    project(id: $projectId) {
      ...ProjectHeader_project
      tasks {
        ...TaskList_tasks
      }
    }
  }
`;

const EditTaskQuery = graphql`
  query TasksEditTaskQuery($id: ID!) {
    task(id: $id) {
      ...TaskEditModal_task
    }
    projects {
      ...TaskEditModal_projects
    }
  }
`

const EditProjectQuery = graphql`
  query TasksEditProjectQuery($projectId: ID!) {
    project(id: $projectId) {
      ...ProjectEditModal_project
    }
  }
`;

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      editTaskId: undefined,
      editTaskSaving: false,
      showEditProjectModal: false,
      editProjectSaving: false,
    };
  }

  componentDidMount = () => {
    this.historyListen();
  }

  componentWillUnmount = () => {
    this.historyUnlisten();
  }

  historyListen = () => {
    let prevLocation = {};
    this.historyUnlisten = this.props.history.listen(location => {
      const pathChanged = prevLocation.pathname !== location.pathname;
      const hashChanged = prevLocation.hash !== location.hash;
      if (pathChanged || hashChanged) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }
      prevLocation = location;
    });
  }

  handleAddTask = (title, projectId, onSuccess) => {
    this.setState({ isLoading: true });
    AddTaskMutation(title, projectId, (taskId, errors) => { 
      this.setState({ isLoading: false });
      if (!errors) {
        this.setState({ isLoading: false });
        console.log(`Task ${taskId} added`);
        onSuccess();
      } 
    });
  };

  handleToggleTaskCompleted = (taskId, completed) => {
    ToggleTaskCompletedMutation(taskId, completed, 
      () => console.log(`Task ${taskId} completed`));
  };

  handleEditTaskClick = (taskId) => {
    this.setState({ editTaskId: taskId });
  };

  handleCloseTaskEditModal = () => {
    this.setState({ editTaskId: undefined, editTaskSaving: false });
  };

  handleSaveTaskEdit = (task) => {
    this.setState({ editTaskSaving: true });
    UpdateTaskMutation(task, (taskId, errors) => {
      this.setState({ editTaskSaving: false });
      if (!errors) {
        console.log(`Task ${taskId} updated`);
        this.handleCloseTaskEditModal();
      }
    })
  };

  handleDeleteTask = (taskId) => {
    this.setState({ editTaskSaving: true });
    DeleteTaskMutation(taskId, this.getProjectId(), (deletedTaskId, errors) => {
      this.setState({ editTaskSaving: false });
      if (!errors) {
        console.log(`Task ${deletedTaskId} deleted`);
        this.handleCloseTaskEditModal();
      }
    });
  };

  handleEditProjectClick = () => {
    this.setState({ showEditProjectModal: true });
  };

  handleCloseProjectEditModal = () => {
    this.setState({ showEditProjectModal: false, editProjectSaving: false });
  };

  handleSaveProject = (project) => {
    this.setState({ editProjectSaving: true });
    UpdateProjectMutation(project.id, project.name, 
      project.description, project.deadline, (projectId, errors) => {
        this.setState({ editProjectSaving: false });
        if (!errors) {
          console.log(`${projectId} updated`);
          this.handleCloseProjectEditModal();
        }
      });
  };

  handleDeleteProject = (projectId) => {
    this.setState({ editProjectSaving: true });
    DeleteProjectMutation(projectId, (id, errors) => {
      this.setState({ editProjectSaving: false });
      if (!errors) {
        console.log(`Project ${id} deleted`);
        this.handleCloseProjectEditModal();
        setTimeout(() => {
          this.props.history.push('/');
        }, 500);
      }
    });
  };

  getPriorities = () => {
    return Object.keys(priorityMap).map(p => ({
      value: p, 
      label: priorityMap[p] ? priorityMap[p].label : p
    }));
  };

  getProjectId = () => {
    return this.props.match && this.props.match.params.projectId;
  };

  render() {
    let tasksQueryVariables;
    let tasksQuery = AllTasksQuery;
    let projectId = this.getProjectId();

    if (projectId) {
      tasksQuery = ProjectTasksQuery;
      tasksQueryVariables = {
        projectId: projectId
      };
    }

    const showTaskEditModal = this.state.editTaskId;
    const showProjectEditModal = projectId && this.state.showEditProjectModal;

    return (
      <Fragment>
        {showTaskEditModal && 
          <QueryRenderer
            environment={environment}
            query={EditTaskQuery}
            variables={{ 
              id: this.state.editTaskId
            }}
            render={({error, props}) => {
              if (error) {
                toast.error(error.message);
                return null;
              }
              if (props && props.task) {
                const priorities = this.getPriorities();
                return (
                  <TaskEditModal 
                    saving={this.state.editTaskSaving}
                    task={props.task}
                    priorities={priorities}
                    projects={props.projects}
                    onCancelClick={this.handleCloseTaskEditModal}
                    onSaveClick={this.handleSaveTaskEdit}
                    onDeleteClick={this.handleDeleteTask}
                  />
                )
              }
            }} 
          />
        }
        {showProjectEditModal &&
          <QueryRenderer 
            environment={environment}
            query={EditProjectQuery}
            variables={{
              projectId: projectId
            }}
            render={({ error, props }) => {
              if (error) {
                toast.error(error.message);
                return null;
              }
              if (props && props.project) {
                return (
                  <ProjectEditModalWithFragment 
                    saving={this.state.editProjectSaving}
                    project={props.project} 
                    onCancelClick={this.handleCloseProjectEditModal}
                    onSaveClick={this.handleSaveProject}
                    onDeleteClick={this.handleDeleteProject} 
                  />
                )
              }
            }}
          />
        }
        <Container fluid className="tasks-container">
          <Row>
            <Col>
              <QueryRenderer 
                environment={environment}
                query={tasksQuery}
                variables={tasksQueryVariables}
                render={({error, props}) => {
                  if (error) {
                    return (
                      <Alert variant="danger">
                        <Alert.Heading>Failed to fetch tasks :(</Alert.Heading>
                        <code>Error message: {error.message}</code>
                      </Alert>
                    )
                  } else if (props) {
                    var tasks = props.project ? props.project.tasks : props.tasks;
                    return (
                      <Fragment>
                        {props.project ? 
                          <ProjectHeader
                            project={props.project}
                            onEditProjectClick={this.handleEditProjectClick}
                          />
                          : <h2 className="page-title">All tasks</h2>
                        }
                        <TaskList 
                          tasks={tasks}
                          onToggleTaskCompletedClick={this.handleToggleTaskCompleted}
                          onEditTaskClick={this.handleEditTaskClick}
                        />
                      </Fragment>
                    )
                  }
                  return (
                    <div className="text-center" style={{ marginTop: "40px" }}>
                      <Spinner animation="grow" />
                    </div>
                  );
                }}
              />
            </Col>
          </Row>
          <Row className="sticky-input fixed-bottom">
            <Col>
              <TaskInput projectId={projectId} onAdd={this.handleAddTask} isLoading={this.state.isLoading} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(Tasks);