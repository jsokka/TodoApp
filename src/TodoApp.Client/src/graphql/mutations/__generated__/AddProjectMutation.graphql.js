/**
 * @flow
 * @relayHash d3bad137f48c56ff0cdc7a90694a2ea1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectNav_projects$ref = any;
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
    +$fragmentRefs: ProjectNav_projects$ref
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
    ...ProjectNav_projects
    id
  }
}

fragment ProjectNavItem_project on ProjectType {
  id
  name
  taskCount
  uncompletedTaskCount
}

fragment ProjectNav_projects on ProjectType {
  id
  ...ProjectNavItem_project
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
            "name": "ProjectNav_projects",
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
            "name": "taskCount",
            "args": null,
            "storageKey": null
          },
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddProjectMutation",
    "id": null,
    "text": "mutation AddProjectMutation(\n  $projectInput: ProjectInputType!\n) {\n  addProject(projectInput: $projectInput) {\n    ...ProjectNav_projects\n    id\n  }\n}\n\nfragment ProjectNavItem_project on ProjectType {\n  id\n  name\n  taskCount\n  uncompletedTaskCount\n}\n\nfragment ProjectNav_projects on ProjectType {\n  id\n  ...ProjectNavItem_project\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99818637f78c811de1e591fee8369280';
module.exports = node;
