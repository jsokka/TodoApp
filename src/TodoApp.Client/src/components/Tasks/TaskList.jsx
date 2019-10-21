import React, { Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import TaskItem from './TaskItem';

const TaskList = ({ tasks, project, title, onEditTaskClick, onToggleTaskCompletedClick, onEditProjectClick }) => {
    const hasTasks = (tasks || []).length > 0;
    
    const taskItems = (
      tasks.map(task => {
        return (
          <CSSTransition
            key={task.id}
            timeout={500}
            classNames="task"
          >
            <ListGroup.Item>
              <TaskItem 
                task={task} 
                onEditClick={onEditTaskClick}
                onToggleCompletedClick={onToggleTaskCompletedClick}
              />
            </ListGroup.Item>
          </CSSTransition>
        )
      })
    );

    return (  
      <Fragment>
          <h2>
            {title || (project && project.name)}
            {project && 
              <Icon 
                size="sm" 
                style={{ cursor: "pointer", marginLeft: "0.5rem" }} 
                icon={faPencilAlt} 
                onClick={onEditProjectClick}
              />}
          </h2>
            {project &&
              <div>
                <p>{project.description}</p>
              </div>
            }
                    
          {!hasTasks 
            ? <strong>No tasks</strong>
            : <ListGroup className="task-list">
            <TransitionGroup>
              {taskItems}
            </TransitionGroup>
          </ListGroup>}
      </Fragment>
    );
}

export default createFragmentContainer(TaskList, { tasks: graphql`
  fragment TaskList_tasks on TaskType @relay(plural: true) {
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