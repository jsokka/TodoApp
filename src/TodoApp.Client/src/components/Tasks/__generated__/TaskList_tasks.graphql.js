/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type TaskPriority = "HIGH" | "LOW" | "NORMAL" | "VERY_HIGH" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskList_tasks$ref: FragmentReference;
declare export opaque type TaskList_tasks$fragmentType: TaskList_tasks$ref;
export type TaskList_tasks = $ReadOnlyArray<{|
  +id: string,
  +title: string,
  +deadline: ?any,
  +priority: TaskPriority,
  +completedOn: ?any,
  +isCompleted: boolean,
  +project: ?{|
    +name: string
  |},
  +$refType: TaskList_tasks$ref,
|}>;
export type TaskList_tasks$data = TaskList_tasks;
export type TaskList_tasks$key = $ReadOnlyArray<{
  +$data?: TaskList_tasks$data,
  +$fragmentRefs: TaskList_tasks$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TaskList_tasks",
  "type": "TaskType",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a85e0f402c88bfb97ef1c0d62ba70e1f';
module.exports = node;
