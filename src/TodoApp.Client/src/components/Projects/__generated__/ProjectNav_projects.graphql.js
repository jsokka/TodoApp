/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectNav_projects$ref: FragmentReference;
declare export opaque type ProjectNav_projects$fragmentType: ProjectNav_projects$ref;
export type ProjectNav_projects = $ReadOnlyArray<{|
  +id: string,
  +name: string,
  +uncompletedTaskCount: number,
  +$refType: ProjectNav_projects$ref,
|}>;
export type ProjectNav_projects$data = ProjectNav_projects;
export type ProjectNav_projects$key = $ReadOnlyArray<{
  +$data?: ProjectNav_projects$data,
  +$fragmentRefs: ProjectNav_projects$ref,
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
(node/*: any*/).hash = '3a7af3176b736c2554638734577a25e0';
module.exports = node;
