import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicThemeComposed } from './web.composition';

it('Should render a CSS themed component with proper style', () => {
  render(<BasicThemeComposed />);
  const divElement = screen.getByText('Div styled with CSS Variables');
  expect(divElement).toHaveStyle({
    color: 'var(--primary-color)',
    fontSize: 'var(--font-size)',
    backgroundColor: 'var(--secondary-color)',
    borderColor: 'var(--border-color)',
    borderStyle: 'var(--border-style)',
    padding: 'var(--spacing)',
    borderWidth: 'var(--border-width)',
  });
});

it('Should render a themed component that used the useTheme hook with proper style', () => {
  render(<BasicThemeComposed />);
  const divElement = screen.getByText('Div styled with Hooks');
  expect(divElement).toHaveStyle({
    color: 'red',
    fontSize: '18px',
    backgroundColor: 'blue',
    borderColor: 'green',
    borderStyle: 'solid',
    padding: '15px',
    borderWidth: '3px',
  });
});
