import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      loadingTasks: true,
      newTaskTitle: "",
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
    var tasks = this.state.tasks;
    tasks.push({ title: title, project: "-" });
    this.setState({ tasks, newTaskTitle: "" });
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
              loading={this.state.loadingTasks} 
            />
          </Col>
        </Row>
        <Row>
          <Col fluid md={{span: 9, offset: 3}} className="fixed-bottom">
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