import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenSquare, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const priorityMap = {
  "LOW": { label: "Low", badgeVariant: "light" },
  "NORMAL": { label: "Normal", badgeVariant: "primary" },
  "HIGH": { label: "High", badgeVariant: "warning" },
  "VERY_HIGH": { label: "Very High", badgeVariant: "danger" },
};

const TaskItem = ({ task, onEditClick, onToggleCompletedClick, onDeleteClick }) => {
  const handleCompletedClick = (event) => {
    onToggleCompletedClick(task.id, event.target.checked);
  };

  const handleDeleteClick = () => {
    onDeleteClick(task.id);
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
      label: new Date(task.deadline).toLocaleDateString("fi"), 
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

  return (
    <Container className="task-item">
      <Row>
        <Col xs={1}>          
          <div className="custom-control custom-checkbox">
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
          <div className={task.isCompleted ? "completed" : ""}>{task.title}</div>
          <div className="task-info">
            {taskInfo.map((t, i) => <small key={i}>{t.icon} {t.label}</small>)}
          </div>
        </Col>
        <Col xs={1}>
          <Icon icon={faTrashAlt} onClick={handleDeleteClick} />
          <Icon icon={faPenSquare} onClick={handleEditClick} size="lg" />
        </Col>
      </Row>
    </Container>
  );
}

export default TaskItem;