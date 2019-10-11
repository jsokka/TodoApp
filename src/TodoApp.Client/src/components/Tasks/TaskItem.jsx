import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TaskItem = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task);
  }
  
  return (
    <Container>
      <Row>
        <Col>          
          {onDelete && 
            <Button variant="danger" className="float-right" onClick={handleDelete}>
            <Icon icon={faTrashAlt} />
          </Button>}
          <div>{task.title}</div>
          <small>{task.project}</small>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskItem;