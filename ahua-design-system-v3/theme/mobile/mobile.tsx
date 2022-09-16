import { createTheme } from '@teambit/base-react.theme.theme-provider';

import { rNativeTokens } from '@ahua-design-system-v3/design-tokens.rnative-tokens';
import type { RNativeTokensProps } from '@ahua-design-system-v3/design-tokens.rnative-tokens';

const theme = createTheme<RNativeTokensProps>({
  theme: rNativeTokens,
  withoutCssVars: true,
});

const { useTheme } = theme;

export { useTheme };
