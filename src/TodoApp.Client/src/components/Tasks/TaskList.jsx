import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, loading }) => {
    if (loading) {
      return <Spinner animation="grow" />;
    }

    if ((tasks || []).length === 0) {
      return <strong>No tasks</strong>;
    }

    return (  
      <div>
        <h2>Tasks</h2>
          <ListGroup>
            {tasks.map(task => <TaskItem task={task} />)}
          </ListGroup>
      </div>
    );
}

export default TaskList;