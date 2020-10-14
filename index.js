/* eslint-disable import/extensions */
/* eslint-disable no-console */

import validateObject from "./validation/mechanisms.js";

import user from "./users/users.js";
import userScheme from "./users/scheme.js"

import dumpErrors from "./error output/errors.js";

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}