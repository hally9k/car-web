/**
 * @flow
 * @relayHash 1cf8f02080839c986fad09b5dc3f4192
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationVariables = {|
  email: string,
  password: string,
|};
export type loginMutationResponse = {|
  +login: string
|};
*/


/*
mutation loginMutation(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "login",
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "loginMutation",
  "id": null,
  "text": "mutation loginMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password)\n}\n",
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
(node/*: any*/).hash = 'a15233ba417cbac79232c7776ff10169';
module.exports = node;
