import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicThemeComposed } from './mobile.composition';

it('Should render a themed component that used the useTheme hook with proper style', () => {
  const { getByText, getByTestId } = render(<BasicThemeComposed />);
  const textElement = getByText('View styled with Hooks');
  expect(textElement).toHaveStyle({
    color: 'purple',
    fontSize: 12,
  });
  const viewElement = getByTestId('view');
  expect(viewElement).toHaveStyle({
    borderColor: 'green',
    backgroundColor: 'gray',
    borderStyle: 'solid',
    padding: 10,
    borderWidth: 3,
  });
});
