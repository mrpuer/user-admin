import * as React from "react";

export const UserFormErrors = ({formErrors}: any) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) =>
      formErrors[fieldName].length > 0 ? <p key={i}>{fieldName} {formErrors[fieldName]}</p> : ""
    )}
  </div>
);

export default UserFormErrors;
