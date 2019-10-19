import graphql from "babel-plugin-relay/macro";

export default graphql`
  query EditTaskQuery($id: ID!,) {
    task(id: $id) {
      ...TaskEditModal_task
    }
    taskPriorities: __type(name: "TaskPriority") {
      enumValues {
        name
      }
    }
  }
`