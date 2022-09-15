import React from 'react';
import { Accordion } from './accordion';
import { footballTeams } from '@ahua-design-system-v3/api.accordion';

export const BasicAccordion = () => <Accordion elementList={footballTeams} />;
