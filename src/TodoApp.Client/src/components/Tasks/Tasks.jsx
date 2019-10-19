import React, { Component, Fragment } from "react";
import { QueryRenderer } from "react-relay";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskEditModal from "./TaskEditModal";
import environment from "../../graphql/environment";
import {
  AddTaskMutation, 
  ToggleTaskCompletedMutation,
  UpdateTaskMutation,
  DeleteTaskMutation 
} from "../../graphql/mutations/Mutations";
import { 
  AllTasksQuery, 
  EditTaskQuery 
} from "../../graphql/queries/Queries";

export const priorityMap = {
  "LOW": { label: "Low", badgeVariant: "light" },
  "NORMAL": { label: "Normal", badgeVariant: "primary" },
  "HIGH": { label: "High", badgeVariant: "warning" },
  "VERY_HIGH": { label: "Very High", badgeVariant: "danger" },
};

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      editTaskId: null,
      editTaskSaving: false,
    };
  }

  handleAddTask = (title) => {
    this.setState({ isLoading: true });
    AddTaskMutation(title, null,
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
                query={AllTasksQuery}
                render={({error, props}) => {
                  if (error) {
                    return (
                      <Alert variant="danger">
                        <Alert.Heading>Failed to fetch tasks :(</Alert.Heading>
                        <code>Error message: {error.message}</code>
                      </Alert>
                    )
                  } else if (props) {
                    return (
                      <TaskList 
                        tasks={props.tasks} 
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
              <TaskInput onAdd={this.handleAddTask} isLoading={this.state.isLoading} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Tasks;