/**
 * @flow
 * @relayHash e55abe67c9d178a5113c23b3d105c02d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectEditModal_project$ref = any;
export type TasksEditProjectQueryVariables = {|
  projectId: string
|};
export type TasksEditProjectQueryResponse = {|
  +project: {|
    +$fragmentRefs: ProjectEditModal_project$ref
  |}
|};
export type TasksEditProjectQuery = {|
  variables: TasksEditProjectQueryVariables,
  response: TasksEditProjectQueryResponse,
|};
*/


/*
query TasksEditProjectQuery(
  $projectId: ID!
) {
  project(id: $projectId) {
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "projectId"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TasksEditProjectQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
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
    "name": "TasksEditProjectQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
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
    "operationKind": "query",
    "name": "TasksEditProjectQuery",
    "id": null,
    "text": "query TasksEditProjectQuery(\n  $projectId: ID!\n) {\n  project(id: $projectId) {\n    ...ProjectEditModal_project\n    id\n  }\n}\n\nfragment ProjectEditModal_project on ProjectType {\n  id\n  name\n  description\n  deadline\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb4fb65debf77c571be623faf18fc506';
module.exports = node;
