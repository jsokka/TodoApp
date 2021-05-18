import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import { toast } from "react-toastify";
import environment from '../environment'

const mutation = graphql`
  mutation UpdateTaskMutation($taskId: ID!, $taskInput: TaskInputType!) {
    updateTask(taskId: $taskId, taskInput: $taskInput) {
      ...TaskEditModal_task
    }
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default (task, callback) => {
  const variables = {
    taskId: task.id,
    taskInput: {
      title: task.title,
      description: task.description,
      projectId: task.projectId,
      priority: task.priority,
      deadline: task.deadline
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(response.updateTask.__id)
      },
      onError: err => {
        console.error(err);
        toast.error(`Failed to save task ${task.id}`, { 
          toastId: "FailedToUpdateTask"
        });
        callback(undefined, err);
      }
    }
  )
}