import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation ToggleTaskCompletedMutation($taskId: ID!, $completed: Boolean!) {
    toggleTaskCompleted(taskId: $taskId, completed: $completed) {
      id
      completedOn
      isCompleted
    }
  }
`

export default (taskId, completed, callback) => {
  const variables = {
    taskId,
    completed
  }

  const optimisticResponse = {
    toggleTaskCompleted: {
      id: taskId,
      completedOn: completed ? new Date().toISOString() : null,
      isCompleted: completed
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticResponse: optimisticResponse,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}