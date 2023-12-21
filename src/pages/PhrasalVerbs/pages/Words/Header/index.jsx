import { Select } from '../../../../../components/Select';
import { phaseOptions, sortOptions } from '../constants';
import st from './styles.module.scss';

export function Header({
  wordsCount, phase, onPhaseChange, sort, onSortChange,
}) {
  return (
    <div className={st.container}>
      <div className={st.header}>
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
