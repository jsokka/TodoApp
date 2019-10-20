import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation ToggleTaskCompletedMutation($taskId: ID!, $completed: Boolean!) {
    toggleTaskCompleted(taskId: $taskId, completed: $completed) {
      id
      completedOn
      isCompleted
      project {
        id
        uncompletedTaskCount
      }
    }
  }
`

export default (taskId, completed, callback) => {
  const variables = {
    taskId,
    completed
  }

  const optimisticUpdater = (store) => {
    var task = store.get(taskId);
    var project = task.getLinkedRecord("project");

    task.setValue(completed, "isCompleted");
    task.setValue(completed ? new Date().toISOString() : null, "completedOn");

    if (project) {
      const uncompletedTaskCount = project.getValue("uncompletedTaskCount")
        + (completed ? -1 : 1);
      
      project.setValue(uncompletedTaskCount, "uncompletedTaskCount");
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: optimisticUpdater,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}