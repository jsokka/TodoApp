/**
 * @flow
 * @relayHash 098dfc23c60a23d6ef24f347b2e5a906
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
    +project: ?{|
      +uncompletedTaskCount: number
    |}
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "text": "mutation DeleteTaskMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id) {\n    project {\n      uncompletedTaskCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3dd79b2efee5a5431f08d485cc990132';
module.exports = node;
