import React from 'react';
import sample from 'lodash.sample';
import { useSelect } from './use-select';

export type Teams = {
  id: string;
  team: string;
};

export const BasicUseSelect = () => {
  const teams: Teams[] = [
    { id: '01', team: 'Los Angeles Lakers' },
    { id: '02', team: 'Boston Celtics' },
    { id: '03', team: 'San Antonio Spurs' },
    { id: '04', team: 'Golden State Warriors' },
  ];
  const { selectedId, setSelection } = useSelect();
  const defaultSelection = 'No team selected';

  return (
    <div>
      <div>
        Available teams:
        {teams.map((e) => e.team).join(', ')}
      </div>
      <button
        type="button"
        onClick={() => setSelection(sample(teams)?.id || defaultSelection)}
      >
        Select random item
      </button>
      <div>
        Team selected:
        {teams.find((e) => e.id === selectedId)?.team || defaultSelection}
      </div>
    </div>
  );
};
