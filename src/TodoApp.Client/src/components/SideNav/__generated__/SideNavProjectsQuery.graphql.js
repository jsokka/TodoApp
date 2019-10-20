/**
 * @flow
 * @relayHash 542030886b7b0257c1be2f36cf93927b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectNav_projects$ref = any;
export type SideNavProjectsQueryVariables = {||};
export type SideNavProjectsQueryResponse = {|
  +projects: $ReadOnlyArray<{|
    +$fragmentRefs: ProjectNav_projects$ref
  |}>
|};
export type SideNavProjectsQuery = {|
  variables: SideNavProjectsQueryVariables,
  response: SideNavProjectsQueryResponse,
|};
*/


/*
query SideNavProjectsQuery {
  projects {
    ...ProjectNav_projects
    id
  }
}

fragment ProjectNav_projects on ProjectType {
  id
  name
  uncompletedTaskCount
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SideNavProjectsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "projects",
        "storageKey": null,
        "args": null,
        "concreteType": "ProjectType",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectNav_projects",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SideNavProjectsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "projects",
        "storageKey": null,
        "args": null,
        "concreteType": "ProjectType",
        "plural": true,
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SideNavProjectsQuery",
    "id": null,
    "text": "query SideNavProjectsQuery {\n  projects {\n    ...ProjectNav_projects\n    id\n  }\n}\n\nfragment ProjectNav_projects on ProjectType {\n  id\n  name\n  uncompletedTaskCount\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'b861bda205cd3d2142c815ff50d3d3d4';
module.exports = node;
