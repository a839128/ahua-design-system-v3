import React from 'react';
import type {
  AccordionProps,
  Item,
} from '@ahua-design-system-v3/api.accordion';
import { useOpen } from '@ahua-design-system-v3/base-ui.hooks.use-open';
import { useSelect } from '@ahua-design-system-v3/base-ui.hooks.use-select';
import { useTheme } from '@ahua-design-system-v3/theme.web';
import Collapsible from 'react-collapsible';

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

  const Trigger = () => (
    <div
      style={{
        borderWidth,
        borderColor,
        borderStyle,
        padding: spacing,
        marginBottom: spacing,
      }}
      role="button"
      tabIndex={0}
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
      >
        Click here to
        {isOpen ? 'close' : 'open'}
        the menu
      </div>
    </div>
  );

  const RenderItem = ({ item }: { item: Item }) => {
    const color = item.id === selectedId ? primaryColor : secondaryColor;
    return (
      <div
        role="button"
        tabIndex={0}
        key={item.id}
        onKeyDown={() => setSelection(item.id)}
        onClick={() => setSelection(item.id)}
        style={{
          borderColor: color,
          borderStyle,
          borderWidth,
          marginBottom: spacing,
          padding: spacing,
          color,
        }}
      >
        {item.title}
      </div>
    );
  };

  return (
    <div>
      <Collapsible transitionTime={180} open={!isOpen} trigger={<Trigger />}>
        {elementList.length > 0 && (
          <>
            {elementList.map((item) => (
              <RenderItem item={item} />
            ))}
          </>
        )}
      </Collapsible>
    </div>
  );
}
