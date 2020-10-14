function validateField(object, key, keyDescription) {
    const errorList = [];
  
    const objectKeyValue = object[key];
  
    keyDescription.forEach((descr) => {
      const argsArray = [objectKeyValue, ...descr.validator.params];
      if (!descr.validator.rule.apply(null, argsArray)) {
        errorList.push({
          key,
          message: descr.validationMessage,
        });
      }
    });
    return errorList;
  }

function validateObject(object, objectScheme) {
    const errorList = [];
  
    Object.keys(objectScheme).forEach((key) => {
      errorList.push(...validateField(object, key, objectScheme[key]));
    });
  
    return errorList;
  }

export {validateObject as default};
