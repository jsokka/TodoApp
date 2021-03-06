import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { format } from "date-fns";
import { fi } from 'date-fns/locale'
import { priorityMap } from "./Tasks";

const TaskItem = ({ task, onEditClick, onToggleCompletedClick }) => {
  const handleCompletedClick = (event) => {
    onToggleCompletedClick(task.id, event.target.checked);
  };
  
  const handleEditClick = () => {
    onEditClick(task.id);
  };
  
  const taskInfo = [];
  
  if (task.project) {
    taskInfo.push({
      label: task.project.name
    });
  }

  if (task.deadline) {
    taskInfo.push({ 
      label: format(new Date(task.deadline), "PPP", { locale: fi }), 
      icon: <Icon icon={faCalendarDay} />
    });
  } 

  if (task.priority) {
    var map = priorityMap[task.priority];
    if (map) {
      taskInfo.push({
        label: <Badge variant={map.badgeVariant}>{map.label}</Badge>
      });
    }
  }

  let itemClasses = ["task-item"];

  if (task.isCompleted) {
    itemClasses.push("completed");
  }

  return (
    <Container fluid className={itemClasses.join(" ")}>
      <Row>
        <Col xs={1}>          
          <div
            title={task.completedOn && format(new Date(task.completedOn), "Pp", { locale: fi })} 
            className="custom-control custom-checkbox">
            <input 
              type="checkbox" 
              id={`checkbox_${task.id}`}
              className="custom-control-input"  
              onChange={handleCompletedClick} 
              checked={task.isCompleted} 
            />
            <label className="custom-control-label" htmlFor={`checkbox_${task.id}`}></label>
          </div>
        </Col>
        <Col>
          <div className="title">{task.title}</div>
          <div className="task-info">
            {taskInfo.map((t, i) => <small key={i}>{t.icon} {t.label}</small>)}
          </div>
        </Col>
        <Col xs={1} className="actions">
          <Icon icon={faPencilAlt} onClick={handleEditClick} size="lg" />
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
    priority
    completedOn
    isCompleted
    project {
      name
    }
  }
`});