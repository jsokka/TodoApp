import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ListGroup, Spinner } from 'react-bootstrap';

import "./tasks.scss";
import TaskItem from './TaskItem';

const TaskList = ({ tasks, loading, onDeleteTask }) => {
    if (loading) {
      return <Spinner className="text-center" animation="grow" />;
    }

    if ((tasks || []).length === 0) {
      return <strong>No tasks</strong>;
    }

    const taskItems = (
      tasks.map(task => 
        <CSSTransition
          key={task.title}
          timeout={500}
          classNames="task"
        >
          <ListGroup.Item>
            <TaskItem 
              task={task} 
              key={task.title} 
              onDelete={onDeleteTask} 
            />
          </ListGroup.Item>
        </CSSTransition>
      )
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

export default TaskList;