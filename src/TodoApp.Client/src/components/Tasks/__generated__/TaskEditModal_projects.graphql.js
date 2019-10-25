/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskEditModal_projects$ref: FragmentReference;
declare export opaque type TaskEditModal_projects$fragmentType: TaskEditModal_projects$ref;
export type TaskEditModal_projects = $ReadOnlyArray<{|
  +id: string,
  +name: string,
  +$refType: TaskEditModal_projects$ref,
|}>;
export type TaskEditModal_projects$data = TaskEditModal_projects;
export type TaskEditModal_projects$key = $ReadOnlyArray<{
  +$data?: TaskEditModal_projects$data,
  +$fragmentRefs: TaskEditModal_projects$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TaskEditModal_projects",
  "type": "ProjectType",
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
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4202422703bff716f940fe7cf5abdd34';
module.exports = node;
