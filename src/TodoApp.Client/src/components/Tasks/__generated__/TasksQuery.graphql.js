/**
 * @flow
 * @relayHash a50644648025664abb3e666dd33a6ba4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskList_tasks$ref = any;
export type TasksQueryVariables = {||};
export type TasksQueryResponse = {|
  +tasks: $ReadOnlyArray<{|
    +$fragmentRefs: TaskList_tasks$ref
  |}>
|};
export type TasksQuery = {|
  variables: TasksQueryVariables,
  response: TasksQueryResponse,
|};
*/


/*
query TasksQuery {
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
    "name": "TasksQuery",
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
    "name": "TasksQuery",
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
    "name": "TasksQuery",
    "id": null,
    "text": "query TasksQuery {\n  tasks {\n    ...TaskList_tasks\n    id\n  }\n}\n\nfragment TaskList_tasks on TaskType {\n  id\n  title\n  deadline\n  priority\n  completedOn\n  isCompleted\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40b9924ec89d2f016a59bcf5b12a52a7';
module.exports = node;