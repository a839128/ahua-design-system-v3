import React from 'react';
import { Text, StyleSheet } from 'react-native';
import type { AccordionProps } from '@ahua-design-system-v3/api.accordion';

export function Accordion({ elementList }: AccordionProps) {
  return <Text style={styles.text}>Hello World!</Text>;
}

const styles = StyleSheet.create({
  text: {},
});
