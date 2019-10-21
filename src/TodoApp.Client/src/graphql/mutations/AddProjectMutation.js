import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import environment from '../environment'

const mutation = graphql`
  mutation AddProjectMutation($projectInput: ProjectInputType!) {
    addProject(projectInput: $projectInput) {
      ...ProjectEditModal_project
    }
  }
`

export default (name, description, deadline, callback) => {
  const variables = {
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
        callback(response.addProject.__id)
      },
      onError: err => console.error(err)
    }
  )
}
