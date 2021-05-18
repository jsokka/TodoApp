import { commitMutation } from 'react-relay'
import graphql from "babel-plugin-relay/macro";
import { toast } from "react-toastify";
import environment from '../environment'

const mutation = graphql`
  mutation AddTaskMutation($taskInput: TaskInputType!) {
    addTask(taskInput: $taskInput) {
      ...TaskItem_task
      project {
        ...ProjectNav_projects
      }
    }
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default (title, projectId, callback) => {
  const variables = {
    taskInput: {
      title,
      projectId
    }
  }

  const updater = store => {
    const payload = store.getRootField('addTask');
    var root = store.getRoot();

    if (projectId) {
      const project = root.getLinkedRecord("project", { id: projectId });
      let tasks = project.getLinkedRecords("tasks");
      tasks.push(payload);
      project.setLinkedRecords(tasks, "tasks");
    }
    else {
      let tasks = root.getLinkedRecords("tasks");
      tasks.push(payload);
      
      root.setLinkedRecords(tasks, "tasks"); 
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater,
      onCompleted: (response) => {
        callback(response.addTask.__id)
      },
      onError: err => {
        console.error(err);
        toast.error("Failed to save task", { 
          toastId: "FailedToAddTask" 
        });
        callback(undefined, err);
      }
    }
  )
}
