import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation DeleteProjectMutation($id: ID!) {
    deleteProject(projectId: $id) {
      deletedProjectId
    }
  }
`

export default (id, callback) => {
  const variables = {
    id
  }

  const sharedUpdater = (store) => {
    const root = store.getRoot();
    let projects = root.getLinkedRecords("projects");
    projects = projects.filter(p => p.getDataID() !== id);
    root.setLinkedRecords(projects, "projects");
    //store.delete(id);
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