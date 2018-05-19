/**
 * @flow
 * @relayHash f6089c5280bd21d80496b568b792c822
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupData = {
  credentials?: ?AuthProviderCredentials
};
export type AuthProviderCredentials = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};
export type signUpMutationVariables = {|
  authProvider: SignupData
|};
export type signUpMutationResponse = {|
  +signUp: {|
    +firstName: string,
    +lastName: string,
    +email: string,
    +businessId: ?string,
    +createdAt: ?any,
  |}
|};
*/


/*
mutation signUpMutation(
  $authProvider: SignupData!
) {
  signUp(authProvider: $authProvider) {
    firstName
    lastName
    email
    businessId
    createdAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "authProvider",
    "type": "SignupData!",
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
        "name": "authProvider",
        "variableName": "authProvider",
        "type": "SignupData!"
      }
    ],
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "signUpMutation",
  "id": null,
  "text": "mutation signUpMutation(\n  $authProvider: SignupData!\n) {\n  signUp(authProvider: $authProvider) {\n    firstName\n    lastName\n    email\n    businessId\n    createdAt\n  }\n}\n",
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
(node/*: any*/).hash = 'e408066227e712902b987f0756509186';
module.exports = node;
