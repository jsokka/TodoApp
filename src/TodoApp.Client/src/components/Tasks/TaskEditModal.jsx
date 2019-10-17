import React, { useState } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Modal, Button, Form, Col } from "react-bootstrap";

const TaskEditModal = ({ task, onCancelClick, onSaveClick }) => {
  const [form, setValues] = useState({
    title: task.title,
    description: task.description
  });

  const handleCancelClick = () => {
    onCancelClick();
  };
  
  const handleSaveClick = () => {
    onSaveClick();
  };

  const handleOnChange = (event) => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };

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
                required
                name="title"
                type="text"
                placeholder="Task title..."
                onChange={handleOnChange}
                defaultValue={task.title}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select"
                required
                name="priority"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
              required
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
        <Button variant="secondary" onClick={handleCancelClick}>Cancel</Button>
        <Button variant="primary" onClick={handleSaveClick}>Save</Button>
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
  }
`});