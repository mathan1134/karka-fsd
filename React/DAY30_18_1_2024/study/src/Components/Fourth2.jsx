import React from 'react';
import { forwardRef } from 'react';

export const Fourth2 = forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} />
  );
})