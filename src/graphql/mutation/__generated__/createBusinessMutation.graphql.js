/**
 * @flow
 * @relayHash f35166e7ef8854d41fb7fea9afda3714
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateBusinessMutationInput = {
  business: CreateBusinessArgType,
  clientMutationId?: ?string,
};
export type CreateBusinessArgType = {
  name: string,
  domain?: ?string,
  subdomain?: ?string,
};
export type createBusinessMutationVariables = {|
  input: CreateBusinessMutationInput
|};
export type createBusinessMutationResponse = {|
  +createBusiness: ?{|
    +business: {|
      +name: string,
      +subdomain: ?string,
      +domain: ?string,
      +id: string,
    |},
    +clientMutationId: ?string,
  |}
|};
*/


/*
mutation createBusinessMutation(
  $input: CreateBusinessMutationInput!
) {
  createBusiness(input: $input) {
    business {
      name
      subdomain
      domain
      id
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateBusinessMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createBusiness",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateBusinessMutationInput!"
      }
    ],
    "concreteType": "CreateBusinessMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "business",
        "storageKey": null,
        "args": null,
        "concreteType": "Business",
        "plural": false,
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
            "name": "subdomain",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "domain",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "createBusinessMutation",
  "id": null,
  "text": "mutation createBusinessMutation(\n  $input: CreateBusinessMutationInput!\n) {\n  createBusiness(input: $input) {\n    business {\n      name\n      subdomain\n      domain\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "createBusinessMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "createBusinessMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '510151e42489b04ee536f89634087c65';
module.exports = node;
