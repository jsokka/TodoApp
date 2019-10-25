/**
 * @flow
 * @relayHash 06e66a2ba46ed5b361a58f023c08d68f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskEditModal_projects$ref = any;
type TaskEditModal_task$ref = any;
export type TasksEditTaskQueryVariables = {|
  id: string
|};
export type TasksEditTaskQueryResponse = {|
  +task: {|
    +$fragmentRefs: TaskEditModal_task$ref
  |},
  +projects: $ReadOnlyArray<{|
    +$fragmentRefs: TaskEditModal_projects$ref
  |}>,
|};
export type TasksEditTaskQuery = {|
  variables: TasksEditTaskQueryVariables,
  response: TasksEditTaskQueryResponse,
|};
*/


/*
query TasksEditTaskQuery(
  $id: ID!
) {
  task(id: $id) {
    ...TaskEditModal_task
    id
  }
  projects {
    ...TaskEditModal_projects
    id
  }
}

fragment TaskEditModal_projects on ProjectType {
  id
  name
}

fragment TaskEditModal_task on TaskType {
  id
  title
  description
  priority
  deadline
  project {
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TasksEditTaskQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "task",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TaskEditModal_task",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "projects",
        "storageKey": null,
        "args": null,
        "concreteType": "ProjectType",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TaskEditModal_projects",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TasksEditTaskQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "task",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
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
            "name": "priority",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deadline",
            "args": null,
            "storageKey": null
          },
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "projects",
        "storageKey": null,
        "args": null,
        "concreteType": "ProjectType",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TasksEditTaskQuery",
    "id": null,
    "text": "query TasksEditTaskQuery(\n  $id: ID!\n) {\n  task(id: $id) {\n    ...TaskEditModal_task\n    id\n  }\n  projects {\n    ...TaskEditModal_projects\n    id\n  }\n}\n\nfragment TaskEditModal_projects on ProjectType {\n  id\n  name\n}\n\nfragment TaskEditModal_task on TaskType {\n  id\n  title\n  description\n  priority\n  deadline\n  project {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '121122735cea7d4ab4875b61cb6d7a13';
module.exports = node;
