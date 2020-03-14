/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectHeader_project$ref: FragmentReference;
declare export opaque type ProjectHeader_project$fragmentType: ProjectHeader_project$ref;
export type ProjectHeader_project = {|
  +name: string,
  +description: ?string,
  +deadline: ?any,
  +$refType: ProjectHeader_project$ref,
|};
export type ProjectHeader_project$data = ProjectHeader_project;
export type ProjectHeader_project$key = {
  +$data?: ProjectHeader_project$data,
  +$fragmentRefs: ProjectHeader_project$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectHeader_project",
  "type": "ProjectType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = 'bda73a9b8ca4676511c5b2e73f0853cf';

module.exports = node;
