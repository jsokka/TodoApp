/**
 * @flow
 * @relayHash 8481cf7a653063854b2b19971cff5751
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskList_tasks$ref = any;
export type TaskPriority = "HIGH" | "LOW" | "NORMAL" | "VERY_HIGH" | "%future added value";
export type TaskInputType = {|
  title: string,
  projectId?: ?string,
  description?: ?string,
  priority?: ?TaskPriority,
  deadline?: ?any,
|};
export type AddTaskMutationVariables = {|
  taskInput: TaskInputType
|};
export type AddTaskMutationResponse = {|
  +addTask: ?{|
    +$fragmentRefs: TaskList_tasks$ref
  |}
|};
export type AddTaskMutation = {|
  variables: AddTaskMutationVariables,
  response: AddTaskMutationResponse,
|};
*/


/*
mutation AddTaskMutation(
  $taskInput: TaskInputType!
) {
  addTask(taskInput: $taskInput) {
    ...TaskList_tasks
    id
  }
}

fragment TaskList_tasks on TaskType {
  id
  title
  deadline
  priority
  completedOn
  isCompleted
  project {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "taskInput",
    "type": "TaskInputType!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "taskInput",
    "variableName": "taskInput"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addTask",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TaskList_tasks",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addTask",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deadline",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "priority",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completedOn",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isCompleted",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectType",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddTaskMutation",
    "id": null,
    "text": "mutation AddTaskMutation(\n  $taskInput: TaskInputType!\n) {\n  addTask(taskInput: $taskInput) {\n    ...TaskList_tasks\n    id\n  }\n}\n\nfragment TaskList_tasks on TaskType {\n  id\n  title\n  deadline\n  priority\n  completedOn\n  isCompleted\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd78f461db4df6c62fa9b2ec8d389d81';
module.exports = node;
