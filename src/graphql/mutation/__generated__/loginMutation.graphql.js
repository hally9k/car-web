/**
 * @flow
 * @relayHash f450a35dfbda3a197767037a5fbf7fde
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationInput = {
  payload: LoginInput,
  clientMutationId?: ?string,
};
export type LoginInput = {
  email: string,
  password: string,
};
export type loginMutationVariables = {|
  input: loginMutationInput
|};
export type loginMutationResponse = {|
  +login: ?{|
    +payload: string
  |}
|};
*/


/*
mutation loginMutation(
  $input: loginMutationInput!
) {
  login(input: $input) {
    payload
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "loginMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "loginMutationInput!"
      }
    ],
    "concreteType": "loginMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "payload",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "loginMutation",
  "id": null,
  "text": "mutation loginMutation(\n  $input: loginMutationInput!\n) {\n  login(input: $input) {\n    payload\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "loginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "loginMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '86a110c24833c064c064a57d2e7cf65c';
module.exports = node;
