import CloseIcon from '../../../../icons/CloseIcon';
import Links from '../Links';
import st from './styles.module.scss';

export function WordsList({ words, onClose }) {
  return (
    <div className={st.learntWordContainer}>
      <CloseIcon onClick={onClose} />

      {words.map((word, i) => (
        <div className={st.learntWordsRow} key={i}>
          <div className={st.wordContainer}>
            {`${word.word}: ${word.translation}${word.explanation ? word.explanation : ''}`}
          </div>

          <div className={st.linksContainer}>
            <Links word={word.word} />
          </div>
        </div>
      ))}
    </div>
  );
}
