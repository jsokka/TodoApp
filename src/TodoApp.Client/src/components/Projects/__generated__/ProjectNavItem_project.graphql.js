/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectNavItem_project$ref: FragmentReference;
declare export opaque type ProjectNavItem_project$fragmentType: ProjectNavItem_project$ref;
export type ProjectNavItem_project = {|
  +id: string,
  +name: string,
  +uncompletedTaskCount: number,
  +$refType: ProjectNavItem_project$ref,
|};
export type ProjectNavItem_project$data = ProjectNavItem_project;
export type ProjectNavItem_project$key = {
  +$data?: ProjectNavItem_project$data,
  +$fragmentRefs: ProjectNavItem_project$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectNavItem_project",
  "type": "ProjectType",
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
      "name": "name",
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
};
// prettier-ignore
(node/*: any*/).hash = 'fadcfe8282db7f3be7f4f46d2d4d432f';
module.exports = node;
