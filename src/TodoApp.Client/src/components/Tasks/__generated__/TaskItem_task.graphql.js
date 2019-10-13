/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskItem_task$ref: FragmentReference;
declare export opaque type TaskItem_task$fragmentType: TaskItem_task$ref;
export type TaskItem_task = {|
  +id: string,
  +title: string,
  +deadline: ?any,
  +project: {|
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
(node/*: any*/).hash = '6bfb2756a7af7dfb972cf1ec1b1feb8d';
module.exports = node;
