/**
 * @flow
 * @relayHash 0eee5bdb2260a69e268c9ce6197cece6
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
    +uncompletedTaskCount: number
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
    uncompletedTaskCount
    id
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
        "concreteType": "ProjectType",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteTaskMutation",
    "id": null,
    "text": "mutation DeleteTaskMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id) {\n    uncompletedTaskCount\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e44581a50d5fc0271664090c296a6dfb';
module.exports = node;
