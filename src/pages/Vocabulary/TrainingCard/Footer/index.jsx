import st from './styles.module.scss';

export function Footer({
  handleSetVisible, handleNext, handleKnow, handleNotKnow, handleSaveTheResults,
}) {
  return (
    <div className={st.footer}>
      <div className={st.footerLeft}>
        <button onClick={handleSetVisible} className={st.showButton}>Show</button>
        <button onClick={handleNext} className={st.showButton}>Next</button>
        <button onClick={handleKnow} className={st.showButton}>I know</button>
      </div>

      <div className={st.footerLeft}>
        <button onClick={handleNotKnow} className={st.showButton}>I don't know</button>
        <button
          onClick={handleSaveTheResults}
          className={st.showButton}
        >
          Save the results
        </button>
      </div>
    </div>
  );
}
