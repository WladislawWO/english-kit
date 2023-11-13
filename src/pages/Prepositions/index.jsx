import { useMemo, useState } from 'react';
import { data } from './constants';
import { shuffle } from './utils';
import st from './styles.module.scss';

export function Prepositions() {
  const [showedItems, setShowedItems] = useState([]);

  const list = useMemo(() => shuffle(data), []);

  return (
    <div className={st.container}>
      {list.map((item, i) => (
        <div>
          {item.firstElem}
          <span
            className={showedItems.includes(i)
              ? st.prepositionActive
              : st.preposition}
            onClick={() => setShowedItems([...showedItems, i])}
          >
            {showedItems.includes(i) && item.preposition}
          </span>
          {item.secondElem}
        </div>
      ))}
    </div>
  );
}
