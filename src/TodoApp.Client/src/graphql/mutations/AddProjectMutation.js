import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { toast } from "react-toastify";
import environment from "../environment"

const mutation = graphql`
  mutation AddProjectMutation($projectInput: ProjectInputType!) {
    addProject(projectInput: $projectInput) {
      ...ProjectNav_projects
    }
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default (name, description, deadline, callback) => {
  const variables = {
    projectInput: {
      name,
      description,
      deadline
    }
  }

  const updater = (store) => {
    const root = store.getRoot();
    const payload = store.getRootField("addProject");

    let projects = root.getLinkedRecords("projects");
    projects.push(payload)
    
    root.setLinkedRecords(projects,"projects");
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: updater,
      onCompleted: (response) => {
        callback(response.addProject.__id)
      },
      onError: err => {
        toast.error("Failed to save project", { 
          toastId: "FailedToAddProject" 
        });
        console.error(err);
        callback(undefined, err);
      }
    }
  )
}
