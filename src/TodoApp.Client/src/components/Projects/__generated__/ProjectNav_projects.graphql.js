/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProjectNavItem_project$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectNav_projects$ref: FragmentReference;
declare export opaque type ProjectNav_projects$fragmentType: ProjectNav_projects$ref;
export type ProjectNav_projects = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: ProjectNavItem_project$ref,
  +$refType: ProjectNav_projects$ref,
|}>;
export type ProjectNav_projects$data = ProjectNav_projects;
export type ProjectNav_projects$key = $ReadOnlyArray<{
  +$data?: ProjectNav_projects$data,
  +$fragmentRefs: ProjectNav_projects$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectNav_projects",
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
      "kind": "FragmentSpread",
      "name": "ProjectNavItem_project",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '92934aa754cd787d1d22f5fbd0bad85a';

module.exports = node;
