/**
 * @flow
 * @relayHash f1c3b0dc6895eb81abb2f511481e1f76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signUpMutationInput = {
  payload?: ?AuthProviderCredentials,
  clientMutationId?: ?string,
};
export type AuthProviderCredentials = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};
export type signUpMutationVariables = {|
  input: signUpMutationInput
|};
export type signUpMutationResponse = {|
  +signUp: ?{|
    +payload: {|
      +firstName: string,
      +lastName: string,
      +email: string,
      +businessId: ?string,
      +createdAt: ?any,
    |}
  |}
|};
*/


/*
mutation signUpMutation(
  $input: signUpMutationInput!
) {
  signUp(input: $input) {
    payload {
      firstName
      lastName
      email
      businessId
      createdAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "signUpMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signUp",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "signUpMutationInput!"
      }
    ],
    "concreteType": "signUpMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "payload",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "businessId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "signUpMutation",
  "id": null,
  "text": "mutation signUpMutation(\n  $input: signUpMutationInput!\n) {\n  signUp(input: $input) {\n    payload {\n      firstName\n      lastName\n      email\n      businessId\n      createdAt\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "signUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "signUpMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d4d7cbdfb31c11bea45882dd43ceeb6';
module.exports = node;
