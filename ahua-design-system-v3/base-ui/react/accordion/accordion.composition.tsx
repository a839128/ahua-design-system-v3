import React from 'react';
import { footballTeams } from '@ahua-design-system-v3/api.accordion';
import { Accordion } from './accordion';

export const BasicAccordion = () => <Accordion elementList={footballTeams} />;
