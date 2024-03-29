import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { data } from '../constants';
import { shuffle, formatLocalStorageData, updateWithAnimation } from '../../../utils';
import { DAILY_WORDS, VOCAB_CORRECT_ANSWERS, VOCAB_INCORRECT_ANSWERS } from '../../../constants/localStorage';
import { DAILY_WORDS_AMOUNT } from './constants';

export const useTrainingCard = () => {
  const defaultLearntWords = formatLocalStorageData(localStorage.getItem(VOCAB_CORRECT_ANSWERS));
  const defaultWordsToLearn = formatLocalStorageData(localStorage.getItem(VOCAB_INCORRECT_ANSWERS));
  const defaultDailyWords = formatLocalStorageData(localStorage.getItem(DAILY_WORDS));

  const [activeItem, setActiveItem] = useState(0);
  const [subject, setSubject] = useState(null);
  const [correct, setCorrect] = useState([]);
  const [inCorrect, setIncorrect] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [isLearntOnly, setIsLearntOnly] = useState(false);
  const [isToLearnOnly, setIsToLearnOnly] = useState(false);
  const [excludeLearntWords, setExcludeLearntWords] = useState(true);
  const [isTranslateToEnglish, setIsTranslateToEnglish] = useState(false);
  const [isWordsShow, setWordsShow] = useState(false);
  const [isCorrectAnswersShow, setCorrectAnswersShow] = useState(false);
  const [isWrongAnswersShow, setWrongAnswersShow] = useState(false);
  const [learntWords, setLearntWords] = useState(defaultLearntWords);
  const [isDailyWords, setIsDailyWords] = useState(true);
  const [wordsToLearn, setWordsToLearn] = useState(defaultWordsToLearn);
  const [dailyWords, setDailyWords] = useState(defaultDailyWords || []);

  const filteredList = useMemo(() => {
    let result = data;
    if (isLearntOnly) {
      result = result.filter((i) => learntWords.includes(i.word));
    } else if (isToLearnOnly) {
      result = result.filter((i) => wordsToLearn.includes(i.word));
    }
    if (excludeLearntWords) {
      result = result.filter((i) => !learntWords.includes(i.word));
    }
    if (subject) {
      result = result.filter((i) => i.subject === subject.value);
    }

    return shuffle(result).slice(0, DAILY_WORDS_AMOUNT);
  }, [isLearntOnly, isToLearnOnly, subject, excludeLearntWords, dailyWords]);

  const list = useMemo(() => {
    if (isDailyWords) {
      return data.filter((i) => dailyWords.includes(i.word));
    }

    return filteredList;
  }, [filteredList, isDailyWords, dailyWords]);

  const item = list[activeItem] || {};

  const openWords = () => {
    updateWithAnimation(() => setWordsShow(true));
  };
  const closeWords = () => {
    updateWithAnimation(() => setWordsShow(false));
  };

  const openCorrectAnswers = () => {
    updateWithAnimation(() => setCorrectAnswersShow(true));
  };
  const closeCorrectAnswers = () => {
    updateWithAnimation(() => setCorrectAnswersShow(false));
  };

  const openWrongAnswers = () => {
    updateWithAnimation(() => setWrongAnswersShow(true));
  };
  const closeWrongAnswers = () => {
    updateWithAnimation(() => setWrongAnswersShow(false));
  };

  const chooseSubject = (selectedOption) => {
    setSubject(selectedOption?.value ? selectedOption : null);
  };

  const handleNext = () => {
    if (activeItem + 1 < list.length) {
      setActiveItem(activeItem + 1);
    } else {
      toast.error('There is no words anymore');
    }

    setIsVisible(false);
  };

  const handleKnow = () => {
    setCorrect((prevData) => (Array.from(new Set([...prevData, item]))));
  };

  const handleIsTranslateToEnglish = () => {
    setIsTranslateToEnglish((state) => !state);
  };

  const handleChangeDailyWords = () => {
    setIsDailyWords((state) => !state);
  };

  const handleWordClick = () => {
    navigator.clipboard.writeText(item.word);
    toast.success('Copied');
  };

  const handleSetVisible = () => {
    if (isVisible) {
      handleNext();
      handleKnow();
    } else {
      setIsVisible(true);
    }
  };

  const handleNotKnow = () => {
    setIncorrect((prevData) => (Array.from(new Set([...prevData, item]))));
    handleNext();
  };

  const handleSettings = () => {
    setIsSettings((state) => !state);
  };

  const handleExcludeLearntWords = () => {
    setExcludeLearntWords((state) => !state);
  };

  const handleIsLearntOnly = () => {
    setIsLearntOnly((state) => !state);
    setIsToLearnOnly(false);
    setExcludeLearntWords((state) => !state);
    setActiveItem(0);
  };

  const handleIsToLearnOnly = () => {
    setIsToLearnOnly((state) => !state);
    setIsLearntOnly(false);
    setActiveItem(0);
  };

  const resetResults = () => {
    setActiveItem(0);
    setIncorrect([]);
    setCorrect([]);
  };

  const handleChooseDailyWords = () => {
    const newDailyWords = filteredList.map((i) => i.word);

    setDailyWords(newDailyWords);
    localStorage.setItem(DAILY_WORDS, newDailyWords.join(','));

    toast.success('New words has been saved');
  };

  const handleSaveTheResults = () => {
    const correctAnswersValues = correct.map((i) => i.word);
    const incorrectAnswersValues = inCorrect.map((i) => i.word);
    const newWordsToLearn = wordsToLearn.filter((word) => !correctAnswersValues.includes(word));
    const newLearntWords = learntWords.filter((word) => !incorrectAnswersValues.includes(word));

    const correctResult = Array.from(new Set([...newLearntWords, ...correctAnswersValues]));
    const incorrectResult = Array.from(new Set([...newWordsToLearn, ...incorrectAnswersValues]));

    localStorage.setItem(VOCAB_CORRECT_ANSWERS, correctResult.join(','));
    localStorage.setItem(VOCAB_INCORRECT_ANSWERS, incorrectResult.join(','));
    setLearntWords(correctResult);
    setWordsToLearn(incorrectResult);

    toast.success('Saved');
  };

  return {
    handleKnow,
    handleNext,
    handleNotKnow,
    handleSaveTheResults,
    handleSetVisible,
    handleWordClick,
    handleSettings,
    handleIsLearntOnly,
    handleIsToLearnOnly,
    chooseSubject,
    openWords,
    closeWords,
    openCorrectAnswers,
    closeCorrectAnswers,
    openWrongAnswers,
    closeWrongAnswers,
    handleIsTranslateToEnglish,
    handleExcludeLearntWords,
    resetResults,
    handleChooseDailyWords,
    handleChangeDailyWords,
    learntWords,
    wordsToLearn,
    isDailyWords,
    excludeLearntWords,
    isTranslateToEnglish,
    isWordsShow,
    isCorrectAnswersShow,
    isWrongAnswersShow,
    list,
    subject,
    isLearntOnly,
    isToLearnOnly,
    isSettings,
    correct,
    inCorrect,
    isVisible,
    item,
  };
};
