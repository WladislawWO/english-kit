import { StaticCard } from './StaticCard';
import { TrainingCard } from './TrainingCard';
import st from './styles.module.scss';

export function Vocabulary() {
  return (
    <div className={st.mainWrapper}>
      <StaticCard />

      <TrainingCard />
    </div>
  );
}
