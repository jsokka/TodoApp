import React, { useState } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Modal, Button, Form, Col, Spinner } from "react-bootstrap";
import DatePicker from "../Common/DatePicker";

const TaskEditModal = ({ task, priorities, projects, onCancelClick, onSaveClick, onDeleteClick, saving }) => {
  const [form, setForm] = useState({
    id: task.id,
    projectId: task.project ? task.project.id : null,
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    priority: task.priority
  });

  const handleCancelClick = () => {
    onCancelClick();
  };
  
  const handleSaveClick = () => {
    onSaveClick(form);
  };

  const handleDeleteClick = () => {
    onDeleteClick(task.id);
  };

  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value || null });
  };

  const handleDayChange = (name, day) => {
    setForm({...form, [name]: day});
  };

  const priorityOptions = priorities.map(p => 
    <option key={p.value} value={p.value}>{p.label}</option>
  );

  const projectOptions = projects.map(p => 
    <option key={p.id} value={p.id}>{p.name}</option>  
  ); 

  projectOptions.unshift(<option key="-1" value="">No project</option>);

  return (
    <Modal show={true} backdrop="static">
      <Modal.Header>
        <Modal.Title>Edit task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Task title..."
                defaultValue={task.title}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Project</Form.Label>
              <Form.Control as="select"
                name="projectId"
                defaultValue={task.project ? task.project.id : undefined}
                onChange={handleOnChange}
              >
                {projectOptions}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select"
                name="priority"
                defaultValue={task.priority}
                onChange={handleOnChange}
              >
                {priorityOptions}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Deadline</Form.Label>
              <DatePicker
                style={{ display: "block" }}
                name="deadline"
                onChange={handleDayChange}
                value={task.deadline}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
              name="description"
              placeholder="Task description..."
              rows="4"
              defaultValue={task.description}
              onChange={handleOnChange}
            />
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="danger"
          className="mr-auto" 
          disabled={saving} 
          onClick={handleDeleteClick}>
            Delete
        </Button>
        <Button 
          variant="secondary" 
          disabled={saving} 
          onClick={handleCancelClick}>
            Cancel
          </Button>
        <Button 
          variant="primary" 
          disabled={saving} 
          onClick={handleSaveClick}>
            {saving 
              ? <Spinner animation="border" size="sm" />
              : "Save"
            }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default createFragmentContainer(TaskEditModal, { task: graphql`
  fragment TaskEditModal_task on TaskType {
    id
    title
    description
    priority
    deadline
    project {
      id
    }
  }
`});