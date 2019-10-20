import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router'
import { QueryRenderer } from "react-relay";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskEditModal from "./TaskEditModal";
import "./Tasks.scss";
import environment from "../../graphql/environment";
import graphql from "babel-plugin-relay/macro";
import {
  AddTaskMutation, 
  ToggleTaskCompletedMutation,
  UpdateTaskMutation,
  DeleteTaskMutation 
} from "../../graphql/mutations/Mutations";

export const priorityMap = {
  "LOW": { label: "Low", badgeVariant: "light" },
  "NORMAL": { label: "Normal", badgeVariant: "primary" },
  "HIGH": { label: "High", badgeVariant: "warning" },
  "VERY_HIGH": { label: "Very High", badgeVariant: "danger" },
};

const TodayTasksQuery = graphql`
  query TasksQuery {
    tasks {
      ...TaskList_tasks
    }
  }
`;

const ProjectTasksQuery = graphql`
  query TasksProjectTasksQuery($projectId: ID!) {
    project(id: $projectId) {
      name
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

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      editTaskId: null,
      editTaskSaving: false,
    };
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

  handleDeleteTask = (taskId) => {
    DeleteTaskMutation(taskId, () => console.log(`Task ${taskId} deleted`));
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
    DeleteTaskMutation(taskId, () => {
      console.log(`${taskId} deleted`);
      this.handleCloseTaskEditModal();
    });
  };

  getPriorities = (enumValues) => {
    return enumValues.map(p => ({ 
      value: p.name, 
      label: priorityMap[p.name] ? priorityMap[p.name].label : p.name
    }));
  };

  render() {
    const showTaskEditModal = this.state.editTaskId;

    let tasksQueryVariables;
    let tasksQuery = TodayTasksQuery;
    let projectId;

    const { params } = this.props.match;

    if (params && params.projectId) {
      projectId = params.projectId;
      tasksQuery = ProjectTasksQuery;
      tasksQueryVariables = {
        projectId: params.projectId
      };
    }

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
                    var listTitle = props.project ? props.project.name : "Tasks today";
                    return (
                      <TaskList 
                        title={listTitle}
                        tasks={tasks} 
                        onToggleTaskCompletedClick={this.handleToggleTaskCompleted}
                        onEditTaskClick={this.handleEditTaskClick} 
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