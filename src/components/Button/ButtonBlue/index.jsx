import '../styles.css';

export default function ButtonBlue({ children, ...props }) {
  return (
    <a className="button button--hoo" {...props}>
      <div className="button__wrapper">
        <span className="button__text">{children}</span>
      </div>
      <div className="characterBox">
        <div className="character wakeup">
          <div className="character__face" />
          <div className="charactor__face2" />
          <div className="charactor__body" />
        </div>
        <div className="character wakeup">
          <div className="character__face" />
          <div className="charactor__face2" />
          <div className="charactor__body" />
        </div>
        <div className="character">
          <div className="character__face" />
          <div className="charactor__face2" />
          <div className="charactor__body" />
        </div>
      </div>
    </a>
  );
}
