import st from './styles.module.scss';

export function UkrainianToEnglish({
  word, translation, explanation, isVisible, handleSetVisible,
}) {
  return (
    <div className={st.row}>
      <div className={st.word}>
        <div className={st.translationContainer}>
          <div>
            {translation}
          </div>

          {explanation && (
          <div className={st.explanation}>
            {explanation}
          </div>
          )}
        </div>
      </div>

      <div onClick={handleSetVisible} className={isVisible ? st.answerActive : st.answer}>
        {isVisible && word}
      </div>
    </div>
  );
}
