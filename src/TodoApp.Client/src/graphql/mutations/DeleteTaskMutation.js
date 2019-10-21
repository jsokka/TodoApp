import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation DeleteTaskMutation($id: ID!) {
    deleteTask(id: $id) {
      project {
        uncompletedTaskCount
      }
    }
  }
`

export default (id, projectId, callback) => {
  const variables = {
    id
  }

  const sharedUpdater = (store) => {
    const root = store.getRoot();

    if (projectId) {
      let project = root.getLinkedRecord("project", { id: projectId });
      let tasks = project.getLinkedRecords("tasks");
      tasks = tasks.filter(t => t.getDataID() !== id);
      project.setLinkedRecords(tasks, "tasks");
    }
    else {
      let tasks = root.getLinkedRecords("tasks");
      tasks = tasks.filter(t => t.getDataID() !== id);
      root.setLinkedRecords(tasks, "tasks");
    }
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