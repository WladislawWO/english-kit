import { Select } from '../../../../../components/Select';
import { options } from '../../../options';
import { phaseOptions, sortOptions } from '../constants';
import st from './styles.module.scss';

export function Header({
  subject, chooseSubject, wordsCount, phase, onPhaseChange, sort, onSortChange,
}) {
  return (
    <div className={st.container}>
      <div className={st.header}>
        <Select
          value={subject}
          onChange={chooseSubject}
          options={options}
          placeholder="Subject"
        />

        <Select
          value={phase}
          onChange={onPhaseChange}
          options={phaseOptions}
          placeholder="Phase"
          className={st.phaseSelect}
        />

        <Select
          value={sort}
          onChange={onSortChange}
          options={sortOptions}
          placeholder="Sort"
          className={st.phaseSelect}
        />
      </div>

      <div className={st.footer}>
        Words:
        {' '}
        {wordsCount}
      </div>
    </div>
  );
}
