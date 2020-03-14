/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectEditModal_project$ref: FragmentReference;
declare export opaque type ProjectEditModal_project$fragmentType: ProjectEditModal_project$ref;
export type ProjectEditModal_project = {|
  +id: string,
  +name: string,
  +description: ?string,
  +deadline: ?any,
  +$refType: ProjectEditModal_project$ref,
|};
export type ProjectEditModal_project$data = ProjectEditModal_project;
export type ProjectEditModal_project$key = {
  +$data?: ProjectEditModal_project$data,
  +$fragmentRefs: ProjectEditModal_project$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectEditModal_project",
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
      "name": "description",
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
(node/*: any*/).hash = 'ded632db78aec99894fccec0b39b23dc';

module.exports = node;
