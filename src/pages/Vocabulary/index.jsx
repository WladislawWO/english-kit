import { useState } from 'react';
import { data } from './constants';
import st from './styles.module.scss';

export function Vocabulary() {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleSetVisible = () => {
    setIsVisible(true);
  };

  const handleNext = () => {
    setActiveItem(activeItem + 1);
    setIsVisible(false);
  };

  const item = data[activeItem];

  return (
    <div className={st.container}>
      <div className={st.row}>
        {item.word}

        <div className={isVisible ? st.activeAnswer : st.answer}>
          {isVisible && item.translation}
        </div>
      </div>

      <div className={st.footer}>
        <button onClick={handleSetVisible} className={st.showButton}>Show</button>
        <button onClick={handleNext} className={st.showButton}>Next</button>
      </div>
    </div>
  );
}
