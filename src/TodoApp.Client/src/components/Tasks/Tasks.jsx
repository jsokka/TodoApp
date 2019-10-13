import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import environment from "../../relayEnvironment";

const TasksQuery = graphql`
  query TasksQuery {
    tasks {
      ...TaskItem_task
    }
  }
`;

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingTasks: true,
      tasks: []
    };
  }

  handleAddTask = (title) => {
    let tasks = this.state.tasks;
    this.setState({ 
      tasks: [
        ...tasks, 
        { title: title, project: "-" }
      ], 
      newTaskTitle: "" 
    });
  }

  handleDeleteTask = (task) => {
    let tasks = this.state.tasks;
    this.setState({ tasks: tasks.filter(t => t !== task) });
  }

  handleChange = (e) => {
    this.setState({ newTaskTitle: e.target.value });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Tasks</h1>
            <QueryRenderer 
              environment={environment}
              query={TasksQuery}
              render={({error, props}) => {
                if (error) {
                  return <h1>{error.message}</h1>
                } else if (props) {
                  return <TaskList 
                    tasks={props.tasks} 
                    onDeleteTask={this.handleDeleteTask}
                  />;
                }
                return <strong>Loading...</strong>
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{span: 9, offset: 3}} className="fixed-bottom">
            <TaskInput 
              onAdd={this.handleAddTask} 
              onChange={this.handleChange} 
              newTaskTitle={this.state.newTaskTitle} 
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;