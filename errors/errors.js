/* eslint-disable no-console */

function dumpErrors(errorList, validatedObject) {
    errorList.forEach((error) => {
      console.log(`Field: ${error.key}`);
      console.log(`Provided value: ${validatedObject[error.key]}`);
      console.log(`Message: ${error.message}`);
    });
  }

export {dumpErrors as default};