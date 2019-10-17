/**
 * @flow
 * @relayHash 735b01fcf18a5ec850f5598bee344f7e
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
v1 = [
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
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleTaskCompletedMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ToggleTaskCompletedMutation",
    "id": null,
    "text": "mutation ToggleTaskCompletedMutation(\n  $taskId: ID!\n  $completed: Boolean!\n) {\n  toggleTaskCompleted(taskId: $taskId, completed: $completed) {\n    id\n    completedOn\n    isCompleted\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '93c9fde934db4a5d82dfe724f18eff05';
module.exports = node;
