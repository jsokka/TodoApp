/**
 * @flow
 * @relayHash 32c43cf07550cfe3d2a9b9e0fbdd48db
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToggleTaskCompletedMutationVariables = {|
  taskId: string,
  completed: boolean,
|};
export type ToggleTaskCompletedMutationResponse = {|
  +toggleTaskCompleted: ?{|
    +id: string,
    +completedOn: ?any,
    +isCompleted: boolean,
    +project: ?{|
      +id: string,
      +uncompletedTaskCount: number,
    |},
  |}
|};
export type ToggleTaskCompletedMutation = {|
  variables: ToggleTaskCompletedMutationVariables,
  response: ToggleTaskCompletedMutationResponse,
|};
*/


/*
mutation ToggleTaskCompletedMutation(
  $taskId: ID!
  $completed: Boolean!
) {
  toggleTaskCompleted(taskId: $taskId, completed: $completed) {
    id
    completedOn
    isCompleted
    project {
      id
      uncompletedTaskCount
    }
  }
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
    "name": "completed",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "toggleTaskCompleted",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "completed",
        "variableName": "completed"
      },
      {
        "kind": "Variable",
        "name": "taskId",
        "variableName": "taskId"
      }
    ],
    "concreteType": "TaskType",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "uncompletedTaskCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleTaskCompletedMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleTaskCompletedMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ToggleTaskCompletedMutation",
    "id": null,
    "text": "mutation ToggleTaskCompletedMutation(\n  $taskId: ID!\n  $completed: Boolean!\n) {\n  toggleTaskCompleted(taskId: $taskId, completed: $completed) {\n    id\n    completedOn\n    isCompleted\n    project {\n      id\n      uncompletedTaskCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16299cb57902ff62fb789b1af2245b27';
module.exports = node;
