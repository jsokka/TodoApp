import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation AddTaskMutation($taskInput: TaskInputType!) {
    addTask(taskInput: $taskInput) {
      ...TaskList_tasks
    }
  }
`

export default (title, projectId, callback) => {
  const variables = {
    taskInput: {
      title,
      projectId
    }
  }

  const updater = store => {
    const payload = store.getRootField('addTask');
    if (!payload) {
      return;
    }

    let tasks = store.getRoot().getLinkedRecords("tasks");
    tasks.push(payload);
    
    store.getRoot().setLinkedRecords(tasks, "tasks");
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater,
      onCompleted: (response) => {
        callback(response.addTask.__id)
      },
      onError: err => console.error(err)
    }
  )
}
