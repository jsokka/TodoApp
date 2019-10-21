import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation UpdateProjectMutation($projectId: ID!, $projectInput: ProjectInputType!) {
    updateProject(projectId: $projectId, projectInput: $projectInput) {
      ...ProjectEditModal_project
    }
  }
`

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
      onError: err => console.error(err)
    }
  )
}
