import { data } from './constants';

export const options = [
  { value: '', label: 'Any' },
  ...Array.from(new Set(
    data.map((i) => i.subject),
  )).filter((i) => i).map((i) => ({ label: i, value: i }
  )),
];
