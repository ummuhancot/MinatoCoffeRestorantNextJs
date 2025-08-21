/* export const transformYupError = (errors) => { 
     const errorObject = [];
        
        errors.map((item)=>(errorObject[item.path] = item.message));

        return {
          ok: false,
          message: null,
          errors: errorObject,
        };
 } */
export const transformYupError = (errors) => {
  const errorObject = {};

  errors.forEach((item) => {
    errorObject[item.path] = item.message;
  });

  return {
    ok: false,
    message: null,
    errors: errorObject,
  };
};

export const yupErrorToObject = (errors) => {
  const errObject = {};

  errors.forEach((err) => {
    errObject[err.path] = err.message;
  });

  return {
    ok: false,
    message: "Validation failed",
    errors: errObject,
  };
};
        
/* export const transformYupError = (error) => {
    const errorObject = {};

    if (Array.isArray(error?.inner)) {
        error.inner.forEach((item) => {
            if (item.path) {
                errorObject[item.path] = item.message;
            }
        });
    } else if (error?.path) {
        errorObject[error.path] = error.message;
    }

    return {
        ok: false,
        message: null,
        errors: errorObject,
    };
};
 */
