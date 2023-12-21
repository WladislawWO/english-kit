import { useMemo, useState } from 'react';
import { formatLocalStorageData, shuffle } from '../../../../utils';
import { PHRASAL_VERBS_CORRECT_ANSWERS, PHRASAL_VERBS_INCORRECT_ANSWERS } from '../../../../constants/localStorage';
import { phrasalVerbsData } from '../../constants';
import {
  ASC, LEARNT, SHUFFLE, TO_LEARN,
} from './constants';

export const useWords = () => {
  const learntWords = formatLocalStorageData(
    localStorage.getItem(PHRASAL_VERBS_CORRECT_ANSWERS),
  );
  const wordsToLearn = formatLocalStorageData(
    localStorage.getItem(PHRASAL_VERBS_INCORRECT_ANSWERS),
  );

  const [sort, setSort] = useState(null);
  const [phase, setPhase] = useState(null);
  const [selected, setSelected] = useState([]);

  const list = useMemo(() => {
    let result = phrasalVerbsData;
    if (phase?.value === LEARNT) {
      result = result.filter((i) => learntWords.includes(i.word));
    } else if (phase?.value === TO_LEARN) {
      result = result.filter((i) => wordsToLearn.includes(i.word));
    }

    if (sort?.value === ASC) {
      result = result.toReversed();
    } else if (sort?.value === SHUFFLE) {
      result = shuffle(result);
    }

    return result;
  }, [phase, sort]);

  const onPhaseChange = (selectedOption) => {
    setPhase(selectedOption.value ? selectedOption : null);
  };

  const onSortChange = (selectedOption) => {
    setSort(selectedOption.value ? selectedOption : null);
  };

  return {
    onPhaseChange,
    onSortChange,
    selected,
    sort,
    phase,
    list,
  };
};
