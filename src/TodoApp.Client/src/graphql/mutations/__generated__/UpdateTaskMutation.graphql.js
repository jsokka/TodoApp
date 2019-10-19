/**
 * @flow
 * @relayHash 71e2d9bab807bb9f8f9f5a350f192634
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskEditModal_task$ref = any;
export type TaskPriority = "HIGH" | "LOW" | "NORMAL" | "VERY_HIGH" | "%future added value";
export type TaskInputType = {|
  title: string,
  projectId?: ?string,
  description?: ?string,
  priority?: ?TaskPriority,
  deadline?: ?any,
|};
export type UpdateTaskMutationVariables = {|
  taskId: string,
  taskInput: TaskInputType,
|};
export type UpdateTaskMutationResponse = {|
  +updateTask: {|
    +$fragmentRefs: TaskEditModal_task$ref
  |}
|};
export type UpdateTaskMutation = {|
  variables: UpdateTaskMutationVariables,
  response: UpdateTaskMutationResponse,
|};
*/


/*
mutation UpdateTaskMutation(
  $taskId: ID!
  $taskInput: TaskInputType!
) {
  updateTask(taskId: $taskId, taskInput: $taskInput) {
    ...TaskEditModal_task
    id
  }
}

fragment TaskEditModal_task on TaskType {
  id
  title
  description
  priority
  deadline
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "taskId",
    "type": "ID!",
    "defaultValue": null
  },
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
    "name": "taskId",
    "variableName": "taskId"
  },
  {
    "kind": "Variable",
    "name": "taskInput",
    "variableName": "taskInput"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTask",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TaskEditModal_task",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTask",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "description",
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
            "name": "deadline",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateTaskMutation",
    "id": null,
    "text": "mutation UpdateTaskMutation(\n  $taskId: ID!\n  $taskInput: TaskInputType!\n) {\n  updateTask(taskId: $taskId, taskInput: $taskInput) {\n    ...TaskEditModal_task\n    id\n  }\n}\n\nfragment TaskEditModal_task on TaskType {\n  id\n  title\n  description\n  priority\n  deadline\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9cb28d6323b1d2c8bae5c9f1c39e545';
module.exports = node;
