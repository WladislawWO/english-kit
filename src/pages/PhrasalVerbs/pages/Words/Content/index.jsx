import st from './styles.module.scss';
import Links from '../../../TrainingCard/Links';

export function Content({ list, selected }) {
  return (
    <div className={st.container}>
      {list.map((item) => (
        <div className={st.row} key={item.word} id={item.word}>
          <div className={st.column}>
            {item.word}
          </div>
          <div className={st.middleColumn}>
            {item.translation}

            <div className={st.explanation}>
              {item.explanation}
            </div>
          </div>
          <div className={st.lastColumn}>
            <Links word={item.word} />
          </div>
        </div>
      ))}
    </div>
  );
}
