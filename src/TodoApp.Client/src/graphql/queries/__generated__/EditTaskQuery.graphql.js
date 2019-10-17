/**
 * @flow
 * @relayHash 580966e3f49a132e934cfd467e6f1538
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskEditModal_task$ref = any;
export type EditTaskQueryVariables = {|
  id: string
|};
export type EditTaskQueryResponse = {|
  +task: {|
    +$fragmentRefs: TaskEditModal_task$ref
  |}
|};
export type EditTaskQuery = {|
  variables: EditTaskQueryVariables,
  response: EditTaskQueryResponse,
|};
*/


/*
query EditTaskQuery(
  $id: ID!
) {
  task(id: $id) {
    ...TaskEditModal_task
    id
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditTaskQuery",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditTaskQuery",
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditTaskQuery",
    "id": null,
    "text": "query EditTaskQuery(\n  $id: ID!\n) {\n  task(id: $id) {\n    ...TaskEditModal_task\n    id\n  }\n}\n\nfragment TaskEditModal_task on TaskType {\n  id\n  title\n  description\n  priority\n  deadline\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '726942ee5d94e18fe2aa2155c22cc6e3';
module.exports = node;
