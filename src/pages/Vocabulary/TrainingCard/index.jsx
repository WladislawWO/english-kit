import { useTrainingCard } from './useTrainingCard';
import { SettingsIcon } from '../../../icons';
import { Settings } from './Settings';
import { Footer } from './Footer';
import { WordsList } from './WordsList';
import Links from './Links';
import st from './styles.module.scss';
import { EnglishToUkrainian } from './EnglishToUkrainian';
import { UkrainianToEnglish } from './UkrainianToEnglish';

export function TrainingCard() {
  const {
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
  } = useTrainingCard();

  return (
    <div className={st.container}>
      {!isSettings && !isWordsShow && !isCorrectAnswersShow && !isWrongAnswersShow && (
      <>
        <SettingsIcon className={st.settingsIcon} onClick={handleSettings} />
        <div className={st.header}>
          <div onClick={openWords} className={st.headerItem}>
            Words:
            {' '}
            {list.length}
          </div>

          <div onClick={openCorrectAnswers} className={st.headerItem}>
            Correct answers:
            {' '}
            {correct.length}
          </div>

          <div onClick={openWrongAnswers} className={st.headerItem}>
            Incorrect answers:
            {' '}
            {inCorrect.length}
          </div>

          <div onClick={openWrongAnswers} className={st.headerItem}>
            Answers:
            {' '}
            {inCorrect.length + correct.length}
          </div>
        </div>

        {isTranslateToEnglish
          ? (
            <UkrainianToEnglish
              {...item}
              isVisible={isVisible}
              handleSetVisible={handleSetVisible}
              handleWordClick={handleWordClick}
            />
          )
          : (
            <EnglishToUkrainian
              {...item}
              isVisible={isVisible}
              handleSetVisible={handleSetVisible}
              handleWordClick={handleWordClick}
            />
          )}

        <Links word={item.word} />

        <Footer
          handleSetVisible={handleSetVisible}
          handleNext={handleNext}
          handleKnow={handleKnow}
          handleNotKnow={handleNotKnow}
          handleSaveTheResults={handleSaveTheResults}
        />
      </>
      )}

      {isSettings && (
        <Settings
          handleIsLearntOnly={handleIsLearntOnly}
          handleIsToLearnOnly={handleIsToLearnOnly}
          handleSettings={handleSettings}
          handleExcludeLearntWords={handleExcludeLearntWords}
          chooseSubject={chooseSubject}
          handleIsTranslateToEnglish={handleIsTranslateToEnglish}
          excludeLearntWords={excludeLearntWords}
          isLearntOnly={isLearntOnly}
          isToLearnOnly={isToLearnOnly}
          subject={subject}
          isTranslateToEnglish={isTranslateToEnglish}
        />
      )}

      {isWordsShow && (
        <WordsList words={list} onClose={closeWords} />
      )}

      {isCorrectAnswersShow && (
        <WordsList words={correct} onClose={closeCorrectAnswers} />
      )}

      {isWrongAnswersShow && (
        <WordsList words={inCorrect} onClose={closeWrongAnswers} />
      )}

    </div>
  );
}
