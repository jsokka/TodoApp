import graphql from "babel-plugin-relay/macro";

export default graphql`
  query AllTasksQuery {
    tasks {
      ...TaskList_tasks
    }
  }
`;