import { CloseIcon } from '../../../../icons';
import { options } from '../../options';
import { Select } from '../../../../components/Select';
import st from './styles.module.scss';

export function Settings({
  handleSettings,
  handleIsToLearnOnly,
  handleIsLearntOnly,
  isToLearnOnly,
  isLearntOnly,
  subject,
  chooseSubject,
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
