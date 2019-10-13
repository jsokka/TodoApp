import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TaskItem = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task);
  }
  
  return (
    <Container className="task-item">
      <Row>
        <Col xs={1}>          
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id={`checkbox_${task.id}`} />
            <label className="custom-control-label" htmlFor={`checkbox_${task.id}`}></label>
          </div>
        </Col>
        <Col>
          <div>{task.title}</div>
          <small>{task.project.name}</small>
        </Col>
        <Col xs={1}>
          {onDelete && 
            <Icon icon={faTrashAlt} onClick={handleDelete} />
          }
        </Col>
      </Row>
    </Container>
  );
}

export default createFragmentContainer(TaskItem, { task: graphql`
  fragment TaskItem_task on TaskType {
    id
    title
    deadline
    project {
      name
    }
  }
`});