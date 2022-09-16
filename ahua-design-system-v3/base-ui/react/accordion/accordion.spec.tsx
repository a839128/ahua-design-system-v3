import React from 'react';
import { render } from '@testing-library/react';
import { BasicAccordion } from './accordion.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAccordion />);
  const rendered = getByText('Click here to');
  expect(rendered).toBeTruthy();
});
