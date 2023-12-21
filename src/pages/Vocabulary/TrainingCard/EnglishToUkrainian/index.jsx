import st from './styles.module.scss';

export function EnglishToUkrainian({
  word, translation, explanation, isVisible, handleSetVisible, handleWordClick,
}) {
  return (
    <div className={st.row}>
      <div onClick={handleWordClick} className={st.word}>
        {word}
      </div>

      <div className={isVisible ? st.answerActive : st.answer} onClick={handleSetVisible}>
        {isVisible && (
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
        )}
      </div>
    </div>
  );
}
