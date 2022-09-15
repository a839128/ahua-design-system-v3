import { CSSProperties } from 'react';
import { ViewStyle } from 'react-native';

export type Item = {
  title: string;
  id: string;
};

type ItemProps = {
  item: Item;
  accentColor: string;
};

export type ItemPropsRNative = ItemProps & {
  onPress: () => void;
  styling: Partial<ViewStyle>;
  testID?: string;
};

export type ItemPropsReact = ItemProps & {
  onClick: () => void;
  styling: Partial<CSSProperties>;
};

export type AccordionProps = {
  elementList: Item[];
};

export const footballTeams: Item[] = [
  { title: 'Manchester United', id: '01' },
  { title: 'Barcelona', id: '02' },
  { title: 'Paris Saint G.', id: '03' },
  { title: 'Liverpool', id: '04' },
];
