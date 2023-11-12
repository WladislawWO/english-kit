import '../styles.css';

export default function ButtonYellow({ children, ...props }) {
  return (
    <a className="button button--piyo" {...props}>
      <div className="button__wrapper">
        <span className="button__text">{children}</span>
      </div>
      <div className="characterBox">
        <div className="character wakeup">
          <div className="character__face" />
        </div>
        <div className="character wakeup">
          <div className="character__face" />
        </div>
        <div className="character">
          <div className="character__face" />
        </div>
      </div>
    </a>
  );
}
