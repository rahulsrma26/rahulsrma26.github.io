import React from 'react';
import ThemeContextWrapper from './src/utils/theme';

// provide theme state to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>{element}</ThemeContextWrapper>
);