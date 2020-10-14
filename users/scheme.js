/* eslint-disable import/extensions */

import {checkType, nonEmptyString, numberInRange} from "../validation/rules.js"

const userScheme = {
  
    firstName: [
      {
        validator: {
          params: ["string"],
          rule: checkType
        },
        validationMessage: "First Name is not a string",
      },
      {
        validator: {
          params: [],
          rule: nonEmptyString,
        },
        validationMessage: "First Name is empty",
      },
    ],

    lastName: [
      {
        validator: {
          params: ["string"],
          rule: checkType
        },
        validationMessage: "Last Name is not a string",
      },
      {
        validator: {
          params: [],
          rule: nonEmptyString,
        },
        validationMessage: "Last Name is empty",
      },
    ],

    age: [
      {
        validator: {
          params: ["number"],
          rule: checkType,
        },
        validationMessage: "Age is not a number",
      },
      {
        validator: {
          params: [0, 99],
          rule: numberInRange,
        },
        validationMessage: `Age is not in the range between 0 and 99`,
      },
    ],

    phone: [
      {
        validator: {
          params: ["string"],
          rule: checkType,
        },
        validationMessage: "Phone is not a string",
      },
    ],
  };

export {userScheme as default};