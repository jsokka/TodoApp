import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import { toast } from "react-toastify";
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
    setTimeout(() => {
      store.delete(id);
    }, 0);
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: sharedUpdater,
      updater: sharedUpdater,
      onCompleted: (response) => {
        callback(response.deleteProject.deletedProjectId)
      },
      onError: err => {
        console.error(err); 
        toast.error(`Failed to delete project ${id}`, {
          toastId: `DeleteProject${id}` 
        });
        callback(undefined, err);
      }
    }
  )
}