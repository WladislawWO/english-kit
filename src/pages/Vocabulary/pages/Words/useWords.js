import { useMemo, useState } from 'react';
import { formatLocalStorageData, shuffle } from '../../../../utils';
import { VOCAB_CORRECT_ANSWERS, VOCAB_INCORRECT_ANSWERS } from '../../../../constants/localStorage';
import { data } from '../../constants';
import {
  ASC, LEARNT, SHUFFLE, TO_LEARN,
} from './constants';

export const useWords = () => {
  const learntWords = formatLocalStorageData(localStorage.getItem(VOCAB_CORRECT_ANSWERS));
  const wordsToLearn = formatLocalStorageData(localStorage.getItem(VOCAB_INCORRECT_ANSWERS));

  const [sort, setSort] = useState(null);
  const [subject, setSubject] = useState(null);
  const [phase, setPhase] = useState(null);

  const list = useMemo(() => {
    let result = data;
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

    if (subject) {
      result = result.filter((i) => i.subject === subject.value);
    }

    return result;
  }, [phase, subject, sort]);

  const onPhaseChange = (selectedOption) => {
    setPhase(selectedOption.value ? selectedOption : null);
  };

  const onSortChange = (selectedOption) => {
    setSort(selectedOption.value ? selectedOption : null);
  };

  const chooseSubject = (selectedOption) => {
    setSubject(selectedOption.value ? selectedOption : null);
  };

  return {
    chooseSubject,
    onPhaseChange,
    onSortChange,
    sort,
    phase,
    list,
    subject,
  };
};
