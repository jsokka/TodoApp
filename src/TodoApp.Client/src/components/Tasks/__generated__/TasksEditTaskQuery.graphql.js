/**
 * @flow
 * @relayHash 0fa55b74e1dd4843ee7abae937bfdc77
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskEditModal_task$ref = any;
export type TasksEditTaskQueryVariables = {|
  id: string
|};
export type TasksEditTaskQueryResponse = {|
  +task: {|
    +$fragmentRefs: TaskEditModal_task$ref
  |},
  +taskPriorities: ?{|
    +enumValues: ?$ReadOnlyArray<{|
      +name: string
    |}>
  |},
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
  taskPriorities: __type(name: "TaskPriority") {
    enumValues {
      name
    }
  }
}

fragment TaskEditModal_task on TaskType {
  id
  title
  description
  priority
  deadline
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
  "kind": "LinkedField",
  "alias": "taskPriorities",
  "name": "__type",
  "storageKey": "__type(name:\"TaskPriority\")",
  "args": [
    {
      "kind": "Literal",
      "name": "name",
      "value": "TaskPriority"
    }
  ],
  "concreteType": "__Type",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "enumValues",
      "storageKey": null,
      "args": null,
      "concreteType": "__EnumValue",
      "plural": true,
      "selections": [
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
      (v2/*: any*/)
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
          }
        ]
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TasksEditTaskQuery",
    "id": null,
    "text": "query TasksEditTaskQuery(\n  $id: ID!\n) {\n  task(id: $id) {\n    ...TaskEditModal_task\n    id\n  }\n  taskPriorities: __type(name: \"TaskPriority\") {\n    enumValues {\n      name\n    }\n  }\n}\n\nfragment TaskEditModal_task on TaskType {\n  id\n  title\n  description\n  priority\n  deadline\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '76540c8c8d766180f73316cae1a2db65';
module.exports = node;
