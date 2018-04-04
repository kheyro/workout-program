import React from 'react';

export const FormErrors = ({ hasError, success }) =>
  <div id="form-errors">
      { !hasError.status && hasError.success_message !== '' && <div className="success-message">{ hasError.success_message }</div> }
    <ul className="error-messages">
      { hasError.status && hasError.errors.map((error, i) => <li key={i}>{ error }</li>) }
    </ul>
  </div>;