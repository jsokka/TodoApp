/**
 * @flow
 * @relayHash e15ef0dac651e7614a43eb216aa9fd23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskItem_task$ref = any;
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
    +project: ?{|
      +uncompletedTaskCount: number
    |},
    +$fragmentRefs: TaskItem_task$ref,
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
    ...TaskItem_task
    project {
      uncompletedTaskCount
      id
    }
    id
  }
}

fragment TaskItem_task on TaskType {
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
  "name": "uncompletedTaskCount",
  "args": null,
  "storageKey": null
},
v3 = {
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
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectType",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "TaskItem_task",
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
          (v3/*: any*/),
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
              (v3/*: any*/),
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
    "text": "mutation AddTaskMutation(\n  $taskInput: TaskInputType!\n) {\n  addTask(taskInput: $taskInput) {\n    ...TaskItem_task\n    project {\n      uncompletedTaskCount\n      id\n    }\n    id\n  }\n}\n\nfragment TaskItem_task on TaskType {\n  id\n  title\n  deadline\n  priority\n  completedOn\n  isCompleted\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c89c07e35787f74423b94c9307a2ee88';
module.exports = node;
