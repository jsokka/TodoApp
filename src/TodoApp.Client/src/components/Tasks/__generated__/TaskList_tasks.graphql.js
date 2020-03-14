/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TaskItem_task$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskList_tasks$ref: FragmentReference;
declare export opaque type TaskList_tasks$fragmentType: TaskList_tasks$ref;
export type TaskList_tasks = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: TaskItem_task$ref,
  +$refType: TaskList_tasks$ref,
|}>;
export type TaskList_tasks$data = TaskList_tasks;
export type TaskList_tasks$key = $ReadOnlyArray<{
  +$data?: TaskList_tasks$data,
  +$fragmentRefs: TaskList_tasks$ref,
  ...
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
      "kind": "FragmentSpread",
      "name": "TaskItem_task",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6cdd3f9024fec8daf27e1e191dce7ed1';

module.exports = node;
