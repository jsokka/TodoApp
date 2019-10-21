import React, { useState } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Modal, Button, Form, Col, Spinner } from "react-bootstrap";
import DatePicker from "../Common/DatePicker";

const ProjectEditModal = ({ project, onCancelClick, onSaveClick, onDeleteClick, saving }) => {
  const [form, setForm] = useState({
    id: project.id,
    name: project.name,
    description: project.description,
    deadline: project.deadline
  });

  const handleCancelClick = () => {
    onCancelClick();
  };
  
  const handleSaveClick = () => {
    onSaveClick(form);
  };

  const handleDeleteClick = () => {
    onDeleteClick(project.id);
  };

  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value || null });
  };

  const handleDayChange = (name, day) => {
    setForm({...form, [name]: day});
  };

  return (
    <Modal show={true} backdrop="static">
      <Modal.Header>
        <Modal.Title>Edit project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="project name..."
                defaultValue={project.name}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
            <Form.Label>Deadline</Form.Label>
              <DatePicker
                style={{ display: "block" }}
                name="deadline"
                onChange={handleDayChange}
                value={project.deadline}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
              name="description"
              placeholder="Project description..."
              rows="4"
              defaultValue={project.description}
              onChange={handleOnChange}
            />
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {onDeleteClick && <Button 
          variant="danger"
          className="mr-auto" 
          disabled={saving} 
          onClick={handleDeleteClick}>
            Delete
        </Button>}
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

export default createFragmentContainer(ProjectEditModal, { project: graphql`
  fragment ProjectEditModal_project on ProjectType {
    id
    name
    description
    deadline
  }
`});