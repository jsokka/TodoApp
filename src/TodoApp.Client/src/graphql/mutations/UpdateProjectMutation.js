import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import { toast } from "react-toastify";
import environment from '../environment'

const mutation = graphql`
  mutation UpdateProjectMutation($projectId: ID!, $projectInput: ProjectInputType!) {
    updateProject(projectId: $projectId, projectInput: $projectInput) {
      ...ProjectEditModal_project
    }
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default (id, name, description, deadline, callback) => {
  const variables = {
    projectId: id,
    projectInput: {
      name,
      description,
      deadline
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(response.updateProject.__id)
      },
      onError: err => {
        console.error(err);
        toast.error(`Failed to save project ${id}`, { 
          toastId: "FailedToUpdateProject" 
        });
        callback(id, err);
      }
    }
  )
}
