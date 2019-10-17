/**
 * @flow
 * @relayHash c02be1d294efea0a753cb6bbff46a9e5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTaskMutationVariables = {|
  id: string
|};
export type DeleteTaskMutationResponse = {|
  +deleteTask: string
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
  deleteTask(id: $id)
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
    "kind": "ScalarField",
    "alias": null,
    "name": "deleteTask",
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteTaskMutation",
    "id": null,
    "text": "mutation DeleteTaskMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '001de531fa6839882918af3f42bd3447';
module.exports = node;
