export const transformYupError = (errors) => { 
     const errorObject = [];
        
        errors.inner.map((item)=>(errorObject[item.path] = item.message));

        return {
          ok: false,
          message: null,
          errors: errorObject,
        };
 }
