/**
 * @flow
 * @relayHash f65a638fb4f58e4abef23866cb5463d3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskItem_task$ref = any;
export type TasksQueryVariables = {||};
export type TasksQueryResponse = {|
  +tasks: $ReadOnlyArray<{|
    +$fragmentRefs: TaskItem_task$ref
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
    ...TaskItem_task
    id
  }
}

fragment TaskItem_task on TaskType {
  id
  title
  deadline
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
            "name": "TaskItem_task",
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
    "text": "query TasksQuery {\n  tasks {\n    ...TaskItem_task\n    id\n  }\n}\n\nfragment TaskItem_task on TaskType {\n  id\n  title\n  deadline\n  project {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'abac6f1f665896d392f3a4b9e9c2d01e';
module.exports = node;
