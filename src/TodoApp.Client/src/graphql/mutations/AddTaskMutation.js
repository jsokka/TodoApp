import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation AddTaskMutation($taskInput: TaskInputType!) {
    addTask(taskInput: $taskInput) {
      ...TaskList_tasks
      project {
        uncompletedTaskCount
      }
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
    var root = store.getRoot();

    if (projectId) {
      const project = root.getLinkedRecord("project", { id: projectId });
      let tasks = project.getLinkedRecords("tasks");
      tasks.push(payload);
      project.setLinkedRecords(tasks, "tasks");
    }
    else {
      let tasks = root.getLinkedRecords("tasks");
      tasks.push(payload);
      
      root.setLinkedRecords(tasks, "tasks"); 
    }
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
