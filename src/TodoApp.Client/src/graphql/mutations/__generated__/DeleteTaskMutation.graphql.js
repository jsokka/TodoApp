/**
 * @flow
 * @relayHash 283af37598285ca0ef2562866bd52abd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectNav_projects$ref = any;
export type DeleteTaskMutationVariables = {|
  id: string
|};
export type DeleteTaskMutationResponse = {|
  +deleteTask: ?{|
    +deletedTaskId: ?string,
    +project: ?{|
      +$fragmentRefs: ProjectNav_projects$ref
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
      ...ProjectNav_projects
      id
    }
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
              {
                "kind": "FragmentSpread",
                "name": "ProjectNav_projects",
                "args": null
              }
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteTaskMutation",
    "id": null,
    "text": "mutation DeleteTaskMutation(\n  $id: ID!\n) {\n  deleteTask(id: $id) {\n    deletedTaskId\n    project {\n      ...ProjectNav_projects\n      id\n    }\n  }\n}\n\nfragment ProjectNavItem_project on ProjectType {\n  id\n  name\n  taskCount\n  uncompletedTaskCount\n}\n\nfragment ProjectNav_projects on ProjectType {\n  id\n  ...ProjectNavItem_project\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '97c3dcb9233ac9b0ad21b1e74ed6a85d';
module.exports = node;
