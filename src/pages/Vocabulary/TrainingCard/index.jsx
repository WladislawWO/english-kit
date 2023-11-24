import { useTrainingCard } from './useTrainingCard';
import { SettingsIcon } from '../../../icons';
import { Settings } from './Settings';
import { Footer } from './Footer';
import { WordsList } from './WordsList';
import Links from './Links';
import st from './styles.module.scss';

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
        </div>

        <div className={st.row}>
          <div onClick={handleWordClick} className={st.word}>
            {item.word}
          </div>

          <div className={isVisible ? st.answerActive : st.answer} onClick={handleSetVisible}>
            {isVisible && (
            <div className={st.translationContainer}>
              <div>
                {item.translation}
              </div>

              {item.explanation && (
              <div className={st.explanation}>
                {item.explanation}
              </div>
              )}
            </div>
            )}
          </div>
        </div>

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
          isLearntOnly={isLearntOnly}
          isToLearnOnly={isToLearnOnly}
          subject={subject}
          chooseSubject={chooseSubject}
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
