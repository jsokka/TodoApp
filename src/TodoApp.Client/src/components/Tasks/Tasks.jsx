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
  DeleteTaskMutation 
} from "../../graphql/mutations/Mutations";
import { 
  AllTasksQuery, 
  EditTaskQuery 
} from "../../graphql/queries/Queries";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      editTaskId: null
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
    this.setState({ editTaskId: undefined });
  };

  handleSaveTaskEdit = (task) => {
    this.handleCloseTaskEditModal();
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
              id: this.state.editTaskId }
            }
            render={({error, props}) => {
              if (props) {
                return (
                  <TaskEditModal 
                    task={props.task}
                    onCancelClick={this.handleCloseTaskEditModal}
                    onSaveClick={this.handleSaveTaskEdit}
                  />
                )
              }
            }} 
          />
        }
        <Container>
          <Row>
            <Col>
              <h1>Tasks</h1>
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
                        onDeleteTaskClick={this.handleDeleteTask}
                        onEditTaskClick={this.handleEditTaskClick} 
                      />
                    )
                  }
                  return <Spinner className="text-center" animation="grow" />;
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={{span: 9, offset: 3}} className="fixed-bottom">
              <TaskInput onAdd={this.handleAddTask} isLoading={this.state.isLoading} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Tasks;