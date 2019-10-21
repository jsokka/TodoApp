/**
 * @flow
 * @relayHash 1d7eafda40f90b4c497b4fa51babd499
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskList_tasks$ref = any;
export type TasksAllTasksQueryVariables = {||};
export type TasksAllTasksQueryResponse = {|
  +tasks: $ReadOnlyArray<{|
    +$fragmentRefs: TaskList_tasks$ref
  |}>
|};
export type TasksAllTasksQuery = {|
  variables: TasksAllTasksQueryVariables,
  response: TasksAllTasksQueryResponse,
|};
*/


/*
query TasksAllTasksQuery {
  tasks {
    ...TaskList_tasks
    id
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
var v0 = {
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
    "name": "TasksAllTasksQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TasksAllTasksQuery",
    "argumentDefinitions": [],
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
          (v0/*: any*/),
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TasksAllTasksQuery",
    "id": null,
    "text": "query TasksAllTasksQuery {\n  tasks {\n    ...TaskList_tasks\n    id\n  }\n}\n\nfragment TaskList_tasks on TaskType {\n  id\n  title\n  deadline\n  priority\n  completedOn\n  isCompleted\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b41cb3ff49847719974b70f4374b3d6';
module.exports = node;
