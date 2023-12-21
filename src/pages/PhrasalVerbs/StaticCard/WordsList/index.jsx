import CloseIcon from '../../../../icons/CloseIcon';
import st from './styles.module.scss';

export function WordsList({ words, onClose }) {
  return (
    <div className={st.learntWordContainer}>
      <CloseIcon onClick={onClose} />

      {words.map((word) => (
        <div className={st.learntWordsRow}>
          {word}
        </div>
      ))}
    </div>
  );
}
