/**
 * @flow
 * @relayHash 8a611d60a88c82f4960599c5f8e780df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectEditModal_project$ref = any;
export type ProjectInputType = {|
  name: string,
  description?: ?string,
  deadline?: ?any,
|};
export type UpdateProjectMutationVariables = {|
  projectId: string,
  projectInput: ProjectInputType,
|};
export type UpdateProjectMutationResponse = {|
  +updateProject: ?{|
    +$fragmentRefs: ProjectEditModal_project$ref
  |}
|};
export type UpdateProjectMutation = {|
  variables: UpdateProjectMutationVariables,
  response: UpdateProjectMutationResponse,
|};
*/


/*
mutation UpdateProjectMutation(
  $projectId: ID!
  $projectInput: ProjectInputType!
) {
  updateProject(projectId: $projectId, projectInput: $projectInput) {
    ...ProjectEditModal_project
    id
  }
}

fragment ProjectEditModal_project on ProjectType {
  id
  name
  description
  deadline
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "projectId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "projectInput",
    "type": "ProjectInputType!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "projectId",
    "variableName": "projectId"
  },
  {
    "kind": "Variable",
    "name": "projectInput",
    "variableName": "projectInput"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateProjectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectEditModal_project",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectType",
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
            "name": "name",
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
    "name": "UpdateProjectMutation",
    "id": null,
    "text": "mutation UpdateProjectMutation(\n  $projectId: ID!\n  $projectInput: ProjectInputType!\n) {\n  updateProject(projectId: $projectId, projectInput: $projectInput) {\n    ...ProjectEditModal_project\n    id\n  }\n}\n\nfragment ProjectEditModal_project on ProjectType {\n  id\n  name\n  description\n  deadline\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7d809730c955d31e2985683920d6bab9';
module.exports = node;
