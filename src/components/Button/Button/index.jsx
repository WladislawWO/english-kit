import st from './styles.module.scss';

export default function Button({ onClick, children, props }) {
  return (
    <button onClick={onClick} {...props} className={st.button}>
      {children}
    </button>
  );
}
