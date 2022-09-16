import React from 'react';
import {
  Text,
  Pressable,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import type {
  AccordionProps,
  Item,
} from '@ahua-design-system-v3/api.accordion';
import { useOpen } from '@ahua-design-system-v3/base-ui.hooks.use-open';
import { useSelect } from '@ahua-design-system-v3/base-ui.hooks.use-select';
import { useTheme } from '@ahua-design-system-v3/theme.mobile';
import Collapible from 'react-native-collapsible';

export function Accordion({ elementList }: AccordionProps) {
  const { isOpen, toggleOpen } = useOpen();
  const { selectedId, setSelection } = useSelect();
  const {
    primaryColor,
    secondaryColor,
    spacing,
    borderColor,
    borderWidth,
    borderStyle,
  } = useTheme();

  const renderItem = ({ item }: { item: Item }) => {
    const color = item.id === selectedId ? primaryColor : secondaryColor;
    return (
      <TouchableOpacity
        onPress={() => setSelection(item.id)}
        style={{
          borderColor: color,
          borderStyle,
          borderWidth,
          marginBottom: spacing,
          padding: spacing,
        }}
      >
        <Text style={{ color }}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Pressable
        style={{
          borderWidth,
          borderColor,
          borderStyle,
          padding: spacing,
          marginBottom: spacing,
        }}
        onPress={toggleOpen}
      >
        <Text>Click here to {isOpen ? 'close' : 'open'} the menu</Text>
      </Pressable>
      <Collapible collapsed={!isOpen} duration={180}>
        <FlatList
          data={elementList}
          renderItem={renderItem}
          extraData={selectedId}
          keyExtractor={(item) => item.id}
        />
      </Collapible>
    </View>
  );
}
