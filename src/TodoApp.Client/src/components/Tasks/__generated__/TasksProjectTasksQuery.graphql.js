/**
 * @flow
 * @relayHash 3b02b092de84d7e22b384f5704d1dbc9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectHeader_project$ref = any;
type TaskList_tasks$ref = any;
export type TasksProjectTasksQueryVariables = {|
  projectId: string
|};
export type TasksProjectTasksQueryResponse = {|
  +project: {|
    +tasks: $ReadOnlyArray<{|
      +$fragmentRefs: TaskList_tasks$ref
    |}>,
    +$fragmentRefs: ProjectHeader_project$ref,
  |}
|};
export type TasksProjectTasksQuery = {|
  variables: TasksProjectTasksQueryVariables,
  response: TasksProjectTasksQueryResponse,
|};
*/


/*
query TasksProjectTasksQuery(
  $projectId: ID!
) {
  project(id: $projectId) {
    ...ProjectHeader_project
    tasks {
      ...TaskList_tasks
      id
    }
    id
  }
}

fragment ProjectHeader_project on ProjectType {
  name
  description
  deadline
}

fragment TaskList_tasks on TaskType {
  id
  title
  deadline
  priority
  completedOn
  isCompleted
  project {
    name
    id
  }
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deadline",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "TasksProjectTasksQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "tasks",
            "storageKey": null,
            "args": null,
            "concreteType": "TaskType",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "TaskList_tasks",
                "args": null
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "ProjectHeader_project",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TasksProjectTasksQuery",
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
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tasks",
            "storageKey": null,
            "args": null,
            "concreteType": "TaskType",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/),
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
                "name": "completedOn",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isCompleted",
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
                  (v2/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TasksProjectTasksQuery",
    "id": null,
    "text": "query TasksProjectTasksQuery(\n  $projectId: ID!\n) {\n  project(id: $projectId) {\n    ...ProjectHeader_project\n    tasks {\n      ...TaskList_tasks\n      id\n    }\n    id\n  }\n}\n\nfragment ProjectHeader_project on ProjectType {\n  name\n  description\n  deadline\n}\n\nfragment TaskList_tasks on TaskType {\n  id\n  title\n  deadline\n  priority\n  completedOn\n  isCompleted\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2998d862ca1e112ff49c0a5b08dfde26';
module.exports = node;
