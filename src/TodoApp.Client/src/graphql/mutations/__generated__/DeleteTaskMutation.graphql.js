/**
 * @flow
 * @relayHash 40adc1ab3666716e51c8eb07e1ac862e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTaskMutationVariables = {|
  id: string
|};
export type DeleteTaskMutationResponse = {|
  +deleteTask: ?{|
    +deletedTaskId: ?string,
    +project: ?{|
      +uncompletedTaskCount: number
    |},
  |}
|};
export type DeleteTaskMutation = {|
  variables: DeleteTaskMutationVariables,
  response: DeleteTaskMutationResponse,
|};
*/


/*
mutation DeleteTaskMutation(
  $id: ID!
) {
  deleteTask(id: $id) {
    deletedTaskId
    project {
      uncompletedTaskCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedTaskId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "uncompletedTaskCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteTask",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskDeletePayloadType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectType",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteTask",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskDeletePayloadType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectType",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteTaskMutation",
    "id": null,
    "text": "mutation DeleteTaskMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id) {\n    deletedTaskId\n    project {\n      uncompletedTaskCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '53db60caeb3207982d2553f28019ee6d';
module.exports = node;
