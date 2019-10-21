/**
 * @flow
 * @relayHash a7875bf25555b37ddc20ec6ae04838e1
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
export type AddProjectMutationVariables = {|
  projectInput: ProjectInputType
|};
export type AddProjectMutationResponse = {|
  +addProject: ?{|
    +$fragmentRefs: ProjectEditModal_project$ref
  |}
|};
export type AddProjectMutation = {|
  variables: AddProjectMutationVariables,
  response: AddProjectMutationResponse,
|};
*/


/*
mutation AddProjectMutation(
  $projectInput: ProjectInputType!
) {
  addProject(projectInput: $projectInput) {
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
    "name": "projectInput",
    "type": "ProjectInputType!",
    "defaultValue": null
  }
],
v1 = [
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
    "name": "AddProjectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addProject",
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
    "name": "AddProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addProject",
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
    "name": "AddProjectMutation",
    "id": null,
    "text": "mutation AddProjectMutation(\n  $projectInput: ProjectInputType!\n) {\n  addProject(projectInput: $projectInput) {\n    ...ProjectEditModal_project\n    id\n  }\n}\n\nfragment ProjectEditModal_project on ProjectType {\n  id\n  name\n  description\n  deadline\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7bbf5a3be9e055d86e6371ef50925457';
module.exports = node;
