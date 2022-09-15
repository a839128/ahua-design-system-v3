import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicAccordion } from './accordion.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAccordion />);
  const rendered = getByText('hello from Accordion');
  expect(rendered).toBeTruthy();
});
