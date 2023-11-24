import { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../constants';
import { formatLocalStorageData, updateWithAnimation } from '../../../utils';
import { VOCAB_CORRECT_ANSWERS, VOCAB_INCORRECT_ANSWERS } from '../../../constants/localStorage';
import { WordsList } from './WordsList';
import st from './styles.module.scss';

export function StaticCard() {
  const [isLearntWordsShow, setLearntWordsShow] = useState(false);
  const [isWordsToLearnShow, setWordsToLearnShow] = useState(false);

  const learntWords = formatLocalStorageData(localStorage.getItem(VOCAB_CORRECT_ANSWERS));
  const wordsToLearn = formatLocalStorageData(localStorage.getItem(VOCAB_INCORRECT_ANSWERS));

  const handleLearntWordsShow = () => {
    updateWithAnimation(() => setLearntWordsShow(true));
  };

  const handleLearntWordsClose = () => {
    updateWithAnimation(() => setLearntWordsShow(false));
  };

  const handleWordsToLearnShow = () => {
    updateWithAnimation(() => setWordsToLearnShow(true));
  };

  const handleWordsToLearnClose = () => {
    updateWithAnimation(() => setWordsToLearnShow(false));
  };

  return (
    <div className={st.container}>
      <div className={st.statisticCardWrapper}>
        {!(isLearntWordsShow || isWordsToLearnShow) && (
          <>
            <Link to="/vocabulary/words" className={st.staticRow}>
              Amount of words:
              {' '}
              {data.length}
            </Link>

            <Link to="/vocabulary/words" onClick={handleLearntWordsShow} className={st.staticRow}>
              Learnt words:
              {' '}
              {learntWords.length}
            </Link>

            <Link to="/vocabulary/words" onClick={handleWordsToLearnShow} className={st.staticRow}>
              Words to learn:
              {' '}
              {wordsToLearn.length}
            </Link>
          </>
        )}

        {isLearntWordsShow && (
          <WordsList words={learntWords} onClose={handleLearntWordsClose} />
        )}

        {isWordsToLearnShow && (
          <WordsList words={wordsToLearn} onClose={handleWordsToLearnClose} />
        )}
      </div>
    </div>
  );
}
