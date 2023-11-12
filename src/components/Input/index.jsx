import st from './styles.module.scss';

export default function Input({ label, ...props }) {
  return (
    <div>
      {label && (
        <div className={st.label}>
          {label}
        </div>
      )}
      <input {...props} className={st.input} />
    </div>
  );
}
