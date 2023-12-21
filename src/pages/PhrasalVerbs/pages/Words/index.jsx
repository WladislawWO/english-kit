import { useWords } from './useWords';
import st from './styles.module.scss';
import { Header } from './Header';
import { Content } from './Content';

export function Words() {
  const {
    onPhaseChange,
    onSortChange,
    selected,
    sort,
    list,
    phase,
  } = useWords();

  return (
    <div className={st.wrapper}>
      <Header
        onPhaseChange={onPhaseChange}
        onSortChange={onSortChange}
        sort={sort}
        wordsCount={list.length}
        phase={phase}
      />

      <Content list={list} selected={selected} />
    </div>
  );
}
