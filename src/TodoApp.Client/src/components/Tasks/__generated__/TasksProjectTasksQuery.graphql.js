/**
 * @flow
 * @relayHash 223014003e316c6570e0105ee6375269
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskList_tasks$ref = any;
export type TasksProjectTasksQueryVariables = {|
  projectId: string
|};
export type TasksProjectTasksQueryResponse = {|
  +project: {|
    +id: string,
    +name: string,
    +description: ?string,
    +tasks: $ReadOnlyArray<{|
      +$fragmentRefs: TaskList_tasks$ref
    |}>,
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
    id
    name
    description
    tasks {
      ...TaskList_tasks
      id
    }
  }
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tasks",
            "storageKey": null,
            "args": null,
            "concreteType": "TaskType",
            "plural": true,
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
                "name": "deadline",
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
                  (v3/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TasksProjectTasksQuery",
    "id": null,
    "text": "query TasksProjectTasksQuery(\n  $projectId: ID!\n) {\n  project(id: $projectId) {\n    id\n    name\n    description\n    tasks {\n      ...TaskList_tasks\n      id\n    }\n  }\n}\n\nfragment TaskList_tasks on TaskType {\n  id\n  title\n  deadline\n  priority\n  completedOn\n  isCompleted\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd51266c06d0fff4deb8085fcf1d34ffc';
module.exports = node;
