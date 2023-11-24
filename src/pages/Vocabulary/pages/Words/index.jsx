import { useWords } from './useWords';
import st from './styles.module.scss';
import { Header } from './Header';
import { Content } from './Content';

export function Words() {
  const {
    onPhaseChange,
    chooseSubject,
    onSortChange,
    sort,
    list,
    subject,
    phase,
  } = useWords();

  return (
    <div className={st.wrapper}>
      <Header
        chooseSubject={chooseSubject}
        onPhaseChange={onPhaseChange}
        onSortChange={onSortChange}
        sort={sort}
        subject={subject}
        wordsCount={list.length}
        phase={phase}
      />

      <Content list={list} />
    </div>
  );
}
