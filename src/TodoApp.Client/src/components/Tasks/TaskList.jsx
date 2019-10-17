import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ListGroup } from 'react-bootstrap';
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import "./tasks.scss";
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEditTaskClick, onDeleteTaskClick, onToggleTaskCompletedClick }) => {
    if ((tasks || []).length === 0) {
      return <strong>No tasks</strong>;
    }
    const taskItems = (
      tasks.map(task => {
        return <CSSTransition
          key={task.id}
          timeout={500}
          classNames="task"
        >
          <ListGroup.Item>
            <TaskItem 
              task={task} 
              onEditClick={onEditTaskClick} 
              onDeleteClick={onDeleteTaskClick}
              onToggleCompletedClick={onToggleTaskCompletedClick}
            />
          </ListGroup.Item>
        </CSSTransition>
      })
    );

    return (  
      <div>
        <h2>Tasks</h2>           
          <ListGroup className="task-list">
            <TransitionGroup>
              {taskItems}
            </TransitionGroup>
          </ListGroup>
      </div>
    );
}

// export default TaskList;
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