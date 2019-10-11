import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingTasks: true,
      tasks: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tasks: [{ title: "Pese pyykit", project: "Kotityöt" }, { title: "Kirjoita johdanto", project: "Opinnäytetyö" }],
        loadingTasks: false
      })
    }, 1000);
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
            <TaskList 
              tasks={this.state.tasks} 
              onDeleteTask={this.handleDeleteTask}
              loading={this.state.loadingTasks} 
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