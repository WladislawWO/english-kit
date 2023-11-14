import { useMemo, useState } from 'react';
import { data } from './constants';
import st from './styles.module.scss';
import { shuffle, formatLocalStorageData } from '../../utils';
import { VOCAB_CORRECT_ANSWERS, VOCAB_INCORRECT_ANSWERS } from './localstorage';

export function Vocabulary() {
  const [activeItem, setActiveItem] = useState(0);
  const [correct, setCorrect] = useState([]);
  const [inCorrect, setIncorrect] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const learntWords = formatLocalStorageData(localStorage.getItem(VOCAB_CORRECT_ANSWERS));
  const wordsToLearn = formatLocalStorageData(localStorage.getItem(VOCAB_INCORRECT_ANSWERS));

  const handleSetVisible = () => {
    setIsVisible(true);
  };

  const handleNext = () => {
    if (activeItem < data.length) {
      setActiveItem(activeItem + 1);
    }

    setIsVisible(false);
  };

  const list = useMemo(() => shuffle(data), []);

  const item = list[activeItem];

  const handleKnow = () => {
    setCorrect((prevData) => (Array.from(new Set([...prevData, item]))));
  };

  const handleNotKnow = () => {
    setIncorrect((prevData) => (Array.from(new Set([...prevData, item]))));
  };

  const handleSaveTheResults = () => {
    const newWordsToLearn = Array.from(new Set([...wordsToLearn, ...inCorrect.map((i) => i.word)]));
    const newLearntWords = Array.from(new Set([...learntWords, ...correct.map((i) => i.word)]))
      .filter((i) => !newWordsToLearn.includes(i));

    console.log({
      newWordsToLearn, newLearntWords, wordsToLearn, learntWords, inCorrect, correct,
    });

    localStorage.setItem(VOCAB_CORRECT_ANSWERS, newLearntWords.join(','));
    localStorage.setItem(VOCAB_INCORRECT_ANSWERS, newWordsToLearn.join(','));
  };

  return (
    <div>
      <div className={st.container}>
        <div className={st.statisticCardWrapper}>
          <div>
            Amount of words:
            {' '}
            {data.length}
          </div>

          <div>
            Learnt words:
            {' '}
            {learntWords.length}
          </div>

          <div>
            Words to learn:
            {' '}
            {wordsToLearn.length}
          </div>
        </div>
      </div>
      <div className={st.container}>
        <div className={st.header}>
          <div>
            Correct answers:
            {' '}
            {correct.length}
          </div>

          <div>
            Incorrect answers:
            {' '}
            {inCorrect.length}
          </div>
        </div>
        <div className={st.row}>
          {item.word}

          <div className={isVisible ? st.answerActive : st.answer} onClick={handleSetVisible}>
            {isVisible && item.translation}
          </div>
        </div>

        <div className={st.footer}>
          <div className={st.footerLeft}>
            <button onClick={handleSetVisible} className={st.showButton}>Show</button>
            <button onClick={handleNext} className={st.showButton}>Next</button>
            <button onClick={handleKnow} className={st.showButton}>I know</button>
            <button onClick={handleNotKnow} className={st.showButton}>I don't know</button>
          </div>

          <button onClick={handleSaveTheResults} className={st.showButton}>Save the results</button>
        </div>
      </div>
    </div>
  );
}
