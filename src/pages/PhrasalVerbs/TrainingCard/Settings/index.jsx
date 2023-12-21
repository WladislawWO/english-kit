import { CloseIcon } from '../../../../icons';
import st from './styles.module.scss';

export function Settings({
  handleSettings,
  handleIsToLearnOnly,
  handleIsLearntOnly,
  handleIsTranslateToEnglish,
  isTranslateToEnglish,
  isToLearnOnly,
  isLearntOnly,
}) {
  return (
    <div className={st.settingsContainer}>
      <CloseIcon className={st.settingsIcon} onClick={handleSettings} />

      <div onClick={handleIsToLearnOnly} className={st.settingsRow}>
        <input type="checkbox" checked={isToLearnOnly} />
        Show only words to learn
      </div>

      <div onClick={handleIsLearntOnly} className={st.settingsRow}>
        <input type="checkbox" checked={isLearntOnly} />
        Show only Learnt words
      </div>

      <div onClick={handleIsTranslateToEnglish} className={st.settingsRow}>
        <input type="checkbox" checked={isTranslateToEnglish} />
        Translate to english
      </div>
    </div>
  );
}
