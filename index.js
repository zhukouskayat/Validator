/* eslint-disable import/extensions */
/* eslint-disable no-console */

import validateObject from "./validation/mechanisms.js";

import user from "./models/users.js";
import userScheme from "./schemes/userScheme.js"

import dumpErrors from "./errors/errors.js";

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}