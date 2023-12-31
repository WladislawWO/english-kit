import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-hot-toast';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import st from './App.module.scss';
import { ButtonGrey, ButtonBlue, ButtonYellow } from './components/Button';
import { list } from './library';

const typeTiles = {
  gerund: 'Gerund',
  infinitive: 'Infinitive',
  gerund_infinitive: 'Gerund or Infinitive',
};

const generateNumber = (max) => Math.floor(Math.random() * max - 0);

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [data, setData] = useState(list);
  const [isViewResults, setIsViewResults] = useState(false);
  const [filter, setFilter] = useState('all');
  const [results, setResults] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [word, setWord] = useState(data[generateNumber(data.length)]);

  const handleSelect = (type) => {
    if (word.type === type) {
      toast.success('Yey', { id: 'toast' });

      setCorrectAnswers((prev) => prev + 1);
      setResults((prev) => [{ ...word, result: 'correct' }, ...prev]);
    } else {
      toast.error(`Wrong. The right answer is ${typeTiles[word.type]}`, { id: 'toast' });

      setWrongAnswers((prev) => prev + 1);
      setResults((prev) => [{ ...word, result: 'wrong' }, ...prev]);
    }

    const newData = data.filter((item) => (word.type === type ? item.title !== word.title : true));

    setData(newData);

    if (!newData.length) {
      setIsFinished(true);
      return;
    }
    setWord(newData[generateNumber(newData.length)]);
  };

  const handleToggleResults = () => {
    setIsViewResults((prev) => !prev);
  };

  return (
    <div className={st.container}>
      <div className={st.card}>
        {isViewResults ? (
          <div>
            <div className={st.resultTile}>
              Results
            </div>

            <div className={st.filterContainer}>
              <div className={filter === 'all' && st.filterActive} onClick={() => setFilter('all')}>All</div>
              <div className={filter === 'correct' && st.filterActive} onClick={() => setFilter('correct')}>Correct</div>
              <div className={filter === 'wrong' && st.filterActive} onClick={() => setFilter('wrong')}>Wrong</div>
            </div>
            <div className={st.ulContainer}>

              <ul className={st.ul}>
                {results
                  .filter((result) => (filter === 'correct' ? result.result === 'correct' : filter === 'wrong' ? result.result === 'wrong' : true))
                  .map((result) => (
                    <li>
                      <div style={{ width: '200px' }}>
                        {result.title}
                        {' '}
                        {result.result === 'correct' ? (
                          <FontAwesomeIcon icon={faCircleCheck} color="green" />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} color="#cf4141" />
                        )}
                      </div>
                      <div style={{ fontSize: '14px' }}>
                        {result.result === 'wrong' && ` (The correct answer is: ${typeTiles[result.type]})`}
                      </div>

                    </li>
                  ))}
              </ul>
            </div>

            <div className={st.resultsButtonContainer}>
              <button className={st.button} onClick={handleToggleResults}>Return to practicing</button>
            </div>
          </div>
        ) : (
          <>
            <div className={st.title}>
              {word?.title}
            </div>

            <div>
              <div className={st.footer}>
                <ButtonYellow onClick={() => handleSelect('gerund')}>Gerund</ButtonYellow>
                <ButtonBlue onClick={() => handleSelect('infinitive')}>Infinitive</ButtonBlue>
                <ButtonGrey onClick={() => handleSelect('gerund_infinitive')}>Gerund|Infinitive</ButtonGrey>
              </div>

              <div className={st.score}>
                <div className={st.scorePositive}>
                  Right Answers:
                  {correctAnswers}
                </div>
                <div className={st.scoreNegative}>
                  Wrong Answers:
                  {wrongAnswers}
                </div>
                <div className={st.scoreNegative}>
                  Word Left:
                  {data.length}
                </div>
                {/* <div className={st.percentRate}>Percent Rate: {((correctAnswers + wrongAnswers) * 100) / correctAnswers}%</div> */}
              </div>

              <div className={st.resultsButtonContainer}>
                <button className={st.button} onClick={handleToggleResults}>View results</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
