import React from 'react';

export const MainContainerLoading = ({ loading }) =>
  <div>
    {loading.message}...
  </div>;

export const SubSectionLoading = ({ loading }) =>
  <div>
    Subsection: {loading.message}...
  </div>;