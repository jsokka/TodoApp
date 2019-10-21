/**
 * @flow
 * @relayHash a9d0f4951b3fc6e375216f035c165b3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProjectMutationVariables = {|
  id: string
|};
export type DeleteProjectMutationResponse = {|
  +deleteProject: ?{|
    +deletedProjectId: ?string
  |}
|};
export type DeleteProjectMutation = {|
  variables: DeleteProjectMutationVariables,
  response: DeleteProjectMutationResponse,
|};
*/


/*
mutation DeleteProjectMutation(
  $id: ID!
) {
  deleteProject(projectId: $id) {
    deletedProjectId
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
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "projectId",
        "variableName": "id"
      }
    ],
    "concreteType": "ProjectDeletePayloadType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedProjectId",
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
    "name": "DeleteProjectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProjectMutation",
    "id": null,
    "text": "mutation DeleteProjectMutation(\n  $id: ID!\n) {\n  deleteProject(projectId: $id) {\n    deletedProjectId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3fa7fa3e435c02be7291375e7001c242';
module.exports = node;
