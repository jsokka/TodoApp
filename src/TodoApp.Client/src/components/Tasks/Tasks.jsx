import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router'
import { QueryRenderer } from "react-relay";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskEditModal from "./TaskEditModal";
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
      id
      name
      description
      deadline
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
      id
      name
    }
    taskPriorities: __type(name: "TaskPriority") {
      enumValues {
        name
      }
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

  handleAddTask = (title, projectId) => {
    this.setState({ isLoading: true });
    AddTaskMutation(title, projectId,
      (taskId) => { 
        this.setState({ isLoading: false });
        console.log(`Task ${taskId} added`); 
      })
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
    UpdateTaskMutation(task, () => {
      console.log(`${task.id} updated`);
      this.handleCloseTaskEditModal();
    })
  };

  handleDeleteTask = (taskId) => {
    this.setState({ editTaskSaving: true });
    DeleteTaskMutation(taskId, this.getProjectId(), () => {
      console.log(`Project ${taskId} deleted`);
      this.handleCloseTaskEditModal();
    });
  };

  handleEditProjectClick = (projectId) => {
    this.setState({ showEditProjectModal: true });
  };

  handleCloseProjectEditModal = () => {
    this.setState({ showEditProjectModal: false, editProjectSaving: false });
  };

  handleSaveProject = (project) => {
    this.setState({ editProjectSaving: true });
    UpdateProjectMutation(project.id, project.name, 
      project.description, project.deadline, () => {
        console.log(`${project.id} updated`);
        this.handleCloseProjectEditModal();
      });
  };

  handleDeleteProject = (projectId) => {
    this.setState({ editProjectSaving: true });
    DeleteProjectMutation(projectId, () => {
      console.log(`Project ${projectId} deleted`);
      this.handleCloseProjectEditModal();
      setTimeout(() => {
        this.props.history.push('/all');
      }, 500);
    });
  };

  getPriorities = (enumValues) => {
    return enumValues.map(p => ({ 
      value: p.name, 
      label: priorityMap[p.name] ? priorityMap[p.name].label : p.name
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
              id: this.state.editTaskId,
              enumTypeName: "TaskPriority"
            }}
            render={({error, props}) => {
              if (props && props.task) {
                var priorities = this.getPriorities(props.taskPriorities.enumValues);
                return (
                  <TaskEditModal 
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
              if (props && props.project) {
                return (
                  <ProjectEditModalWithFragment 
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
                    var listTitle = props.project ? props.project.name : "All tasks";
                    return (
                      <TaskList 
                        title={listTitle}
                        tasks={tasks}
                        project={props.project}
                        onToggleTaskCompletedClick={this.handleToggleTaskCompleted}
                        onEditTaskClick={this.handleEditTaskClick}
                        onEditProjectClick={this.handleEditProjectClick}
                      />
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