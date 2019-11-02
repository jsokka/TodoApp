/**
 * @flow
 * @relayHash 4e16846254154553b8e59f7dea210d5f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectNav_projects$ref = any;
export type ToggleTaskCompletedMutationVariables = {|
  taskId: string,
  completed: boolean,
|};
export type ToggleTaskCompletedMutationResponse = {|
  +toggleTaskCompleted: ?{|
    +id: string,
    +completedOn: ?any,
    +isCompleted: boolean,
    +project: ?{|
      +$fragmentRefs: ProjectNav_projects$ref
    |},
  |}
|};
export type ToggleTaskCompletedMutation = {|
  variables: ToggleTaskCompletedMutationVariables,
  response: ToggleTaskCompletedMutationResponse,
|};
*/


/*
mutation ToggleTaskCompletedMutation(
  $taskId: ID!
  $completed: Boolean!
) {
  toggleTaskCompleted(taskId: $taskId, completed: $completed) {
    id
    completedOn
    isCompleted
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
    "name": "taskId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "completed",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "completed",
    "variableName": "completed"
  },
  {
    "kind": "Variable",
    "name": "taskId",
    "variableName": "taskId"
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
  "name": "completedOn",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCompleted",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleTaskCompletedMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleTaskCompleted",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "name": "ToggleTaskCompletedMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleTaskCompleted",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TaskType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "name": "ToggleTaskCompletedMutation",
    "id": null,
    "text": "mutation ToggleTaskCompletedMutation(\n  $taskId: ID!\n  $completed: Boolean!\n) {\n  toggleTaskCompleted(taskId: $taskId, completed: $completed) {\n    id\n    completedOn\n    isCompleted\n    project {\n      ...ProjectNav_projects\n      id\n    }\n  }\n}\n\nfragment ProjectNavItem_project on ProjectType {\n  id\n  name\n  taskCount\n  uncompletedTaskCount\n}\n\nfragment ProjectNav_projects on ProjectType {\n  id\n  ...ProjectNavItem_project\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c63f61fccbf11c8c0873de81b3d199d';
module.exports = node;
