import { CloseIcon } from '../../../../icons';
import { options } from '../../options';
import { Select } from '../../../../components/Select';
import st from './styles.module.scss';

export function Settings({
  handleSettings,
  handleIsToLearnOnly,
  handleIsLearntOnly,
  handleIsTranslateToEnglish,
  handleChangeDailyWords,
  isDailyWords,
  isTranslateToEnglish,
  isToLearnOnly,
  isLearntOnly,
  subject,
  chooseSubject,
  handleExcludeLearntWords,
  excludeLearntWords,
}) {
  return (
    <div className={st.settingsContainer}>
      <CloseIcon className={st.settingsIcon} onClick={handleSettings} />

      <div onClick={handleChangeDailyWords} className={st.settingsRow}>
        <input type="checkbox" checked={isDailyWords} />
        Daily words
      </div>

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

      <div onClick={handleExcludeLearntWords} className={st.settingsRow}>
        <input type="checkbox" checked={excludeLearntWords} />
        Exclude learnt words
      </div>

      <div className={st.subjectWrapper}>
        <Select
          value={subject}
          onChange={chooseSubject}
          options={options}
          classNamePrefix="react-select"
          placeholder="Subject"
        />
      </div>
    </div>
  );
}
