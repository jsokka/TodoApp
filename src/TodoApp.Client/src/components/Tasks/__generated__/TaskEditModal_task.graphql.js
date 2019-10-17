/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type TaskPriority = "HIGH" | "LOW" | "NORMAL" | "VERY_HIGH" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskEditModal_task$ref: FragmentReference;
declare export opaque type TaskEditModal_task$fragmentType: TaskEditModal_task$ref;
export type TaskEditModal_task = {|
  +id: string,
  +title: string,
  +description: ?string,
  +priority: TaskPriority,
  +deadline: ?any,
  +$refType: TaskEditModal_task$ref,
|};
export type TaskEditModal_task$data = TaskEditModal_task;
export type TaskEditModal_task$key = {
  +$data?: TaskEditModal_task$data,
  +$fragmentRefs: TaskEditModal_task$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TaskEditModal_task",
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
};
// prettier-ignore
(node/*: any*/).hash = '2c4d87b4533dca8f636330b856c0cfa4';
module.exports = node;
