import React from 'react';

export const FormErrors = ({ hasError }) =>
  <div>
    <ul>
      { hasError.status && hasError.errors.map(error => <li>{ error }</li>) }
    </ul>
  </div>;