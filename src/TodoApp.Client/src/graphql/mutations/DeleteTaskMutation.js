import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import { toast } from "react-toastify";
import environment from '../environment'

const mutation = graphql`
  mutation DeleteTaskMutation($id: ID!) {
    deleteTask(id: $id) {
      deletedTaskId
      project {
        ...ProjectNav_projects
      }
    }
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
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

    // Without timeout CSSTransitions cause problems when re-rendering. 
    setTimeout(() => {
      store.delete(id);
    }, 0);
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: sharedUpdater,
      onCompleted: (response) => {
        callback(response.deleteTask.deletedTaskId)
      },
      onError: err => {
        console.error(err);
        toast.error(`Failed to delete task ${id}`, {
          toastId: `DeleteTask${id}`
        });
        callback(undefined, err);
      }
    }
  )
}