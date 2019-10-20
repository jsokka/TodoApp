import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation DeleteTaskMutation($id: ID!) {
    deleteTask(id: $id) {
      uncompletedTaskCount
    }
  }
`

export default (id, callback) => {
  const variables = {
    id
  }

  const sharedUpdater = (store) => {
    store.delete(id);
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: sharedUpdater,
      updater: sharedUpdater,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}