/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type TaskPriority = "HIGH" | "LOW" | "NORMAL" | "VERY_HIGH" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskItem_task$ref: FragmentReference;
declare export opaque type TaskItem_task$fragmentType: TaskItem_task$ref;
export type TaskItem_task = {|
  +id: string,
  +title: string,
  +deadline: ?any,
  +priority: TaskPriority,
  +completedOn: ?any,
  +isCompleted: boolean,
  +project: ?{|
    +name: string
  |},
  +$refType: TaskItem_task$ref,
|};
export type TaskItem_task$data = TaskItem_task;
export type TaskItem_task$key = {
  +$data?: TaskItem_task$data,
  +$fragmentRefs: TaskItem_task$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TaskItem_task",
  "type": "TaskType",
  "metadata": null,
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
(node/*: any*/).hash = '7cb6160642b96764e1159b832e059ba4';
module.exports = node;
