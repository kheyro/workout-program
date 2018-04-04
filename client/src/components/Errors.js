import React from 'react';

export const FormErrors = ({ hasError, success }) =>
  <div>
      { !hasError.status && hasError.success_message !== '' && <div>{ hasError.success_message }</div> }
    <ul>
      { hasError.status && hasError.errors.map((error, i) => <li key={i}>{ error }</li>) }
    </ul>
  </div>;