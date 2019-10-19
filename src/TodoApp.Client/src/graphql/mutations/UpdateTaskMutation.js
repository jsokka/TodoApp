import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation UpdateTaskMutation($taskId: ID!, $taskInput: TaskInputType!) {
    updateTask(taskId: $taskId, taskInput: $taskInput) {
      ...TaskEditModal_task
    }
  }
`

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
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}