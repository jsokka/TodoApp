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
  +project: ?{|
    +id: string
  |},
  +$refType: TaskEditModal_task$ref,
|};
export type TaskEditModal_task$data = TaskEditModal_task;
export type TaskEditModal_task$key = {
  +$data?: TaskEditModal_task$data,
  +$fragmentRefs: TaskEditModal_task$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "TaskEditModal_task",
  "type": "TaskType",
  "metadata": null,
  "argumentDefinitions": [],
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
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '16bfb2d069d84b9efc5868b9b3ac9684';

module.exports = node;
