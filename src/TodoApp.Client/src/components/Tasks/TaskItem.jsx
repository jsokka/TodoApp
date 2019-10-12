import React from "react";
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
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1" />
            <label class="custom-control-label" for="customCheck1"></label>
          </div>
        </Col>
        <Col>
          <div>{task.title}</div>
          <small>{task.project}</small>
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

export default TaskItem;