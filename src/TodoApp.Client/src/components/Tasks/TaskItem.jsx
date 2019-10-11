import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

export default function TaskItem({ task }) {  
  return (
    <ListGroup.Item>
      <div>{task.title}</div>
      <small>{task.project}</small>
    </ListGroup.Item>
  );
}