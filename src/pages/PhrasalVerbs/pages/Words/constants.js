import { ANY_OPTION } from '../../../../constants';

export const LEARNT = 'learnt';
export const TO_LEARN = 'to_learn';
export const ASC = 'asc';
export const DECS = 'decs';
export const SHUFFLE = 'shuffle';

export const phaseOptions = [
  ANY_OPTION,
  { value: LEARNT, label: 'Learnt' },
  { value: TO_LEARN, label: 'To learn' },
];

export const sortOptions = [
  ANY_OPTION,
  { value: ASC, label: 'Ascending' },
  { value: DECS, label: 'Descending' },
  { value: SHUFFLE, label: 'Shuffle' },
];
