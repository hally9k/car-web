/**
 * @flow
 * @relayHash dc36a7077efb36d8897f27de34a10039
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
      +user: {|
        +firstName: string,
        +lastName: string,
        +email: string,
        +businessId: ?string,
        +createdAt: ?any,
      |},
      +token: string,
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
      user {
        firstName
        lastName
        email
        businessId
        createdAt
      }
      token
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
        "concreteType": "SignUpRes",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "token",
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
  "text": "mutation signUpMutation(\n  $input: signUpMutationInput!\n) {\n  signUp(input: $input) {\n    payload {\n      user {\n        firstName\n        lastName\n        email\n        businessId\n        createdAt\n      }\n      token\n    }\n  }\n}\n",
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
(node/*: any*/).hash = '507b2129b2d594f87b7ac26d0124451c';
module.exports = node;
