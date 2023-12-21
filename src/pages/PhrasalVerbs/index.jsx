import { StaticCard } from './StaticCard';
import { TrainingCard } from './TrainingCard';
import st from './styles.module.scss';

export function PhrasalVerbs() {
  return (
    <div className={st.mainWrapper}>
      <StaticCard />

      <TrainingCard />
    </div>
  );
}
