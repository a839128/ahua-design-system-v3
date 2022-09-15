import { baseTokens } from '@ahua-design-system-v3/design-tokens.base-tokens';
import type { BaseTokensProps } from '@ahua-design-system-v3/design-tokens.base-tokens';

export interface RNativeTokensProps extends BaseTokensProps {
  spacing: number;
  fontSize: number;
  borderWidth: number;
}

export const rNativeTokens: RNativeTokensProps = {
  ...baseTokens,
  primaryColor: 'purple',
  secondaryColor: 'gray',
  spacing: 10,
  fontSize: 12,
  borderWidth: 3,
};
