import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-hot-toast';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import st from './styles.module.scss';
import { Button } from '../../components/Button';
import { list } from './library';
import Input from '../../components/Input';
import { generateNumber } from '../../utils';

function IrregularVerbs() {
  const [isHintShowed, setIsHintShowed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [pastSimple, setPastSimple] = useState('');
  const [pastParticiple, setPastParticiple] = useState('');
  const [data, setData] = useState(list);
  const [isViewResults, setIsViewResults] = useState(false);
  const [filter, setFilter] = useState('all');
  const [results, setResults] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [word, setWord] = useState(data[generateNumber(data.length)]);

  const clear = () => {
    setPastParticiple('');
    setPastSimple('');
  };

  const handleNext = () => {
    if (!pastParticiple || !pastSimple) {
      setWord(data[generateNumber(data.length)]);
      clear();

      return;
    }
    if (isHintShowed) {
      setIsHintShowed(false);
      setWord(data[generateNumber(data.length)]);
      clear();

      return;
    }

    const isCorrect = word.simplePast.split(' ').includes(pastSimple) && word.pp.split(' ').includes(pastParticiple);

    if (isCorrect) {
      toast.success('Yey', { position: 'top-right' });

      setCorrectAnswers((prev) => prev + 1);
      setResults((prev) => [{ ...word, result: 'correct' }, ...prev]);
    } else {
      toast.error(`Wrong. The right answer is ${word.simplePast} | ${word.pp}`, { position: 'top-right' });

      setWrongAnswers((prev) => prev + 1);
      setResults((prev) => [{
        ...word, result: 'wrong', answerPastSimple: pastSimple, answerPP: pastParticiple,
      }, ...prev]);
    }

    const newData = data.filter((item) => (isCorrect ? item.infinitive !== word.infinitive : true));

    setData(newData);

    if (!newData.length) {
      setIsFinished(true);
      return;
    }

    clear();
    setWord(newData[generateNumber(newData.length)]);
  };

  const handleToggleResults = () => {
    setIsViewResults((prev) => !prev);
  };

  const handleShowAnswers = () => {
    setIsHintShowed(true);
    setPastSimple(word.simplePast);
    setPastParticiple(word.pp);
  };
  console.log(pastParticiple, pastSimple);

  return (
    <div className={st.container}>
      <div className={st.card}>
        {isViewResults ? (
          <div>
            <div className={st.resultTile}>
              Results
            </div>

            <div className={st.filterContainer}>
              <div
                className={filter === 'all' && st.filterActive}
                onClick={() => setFilter('all')}
              >
                All
              </div>
              <div className={filter === 'correct' && st.filterActive} onClick={() => setFilter('correct')}>Correct</div>
              <div className={filter === 'wrong' && st.filterActive} onClick={() => setFilter('wrong')}>Wrong</div>
            </div>
            <div className={st.ulContainer}>

              <ul className={st.ul}>
                {results
                  .filter((result) => (filter === 'correct' ? result.result === 'correct' : filter === 'wrong' ? result.result === 'wrong' : true))
                  .map((result, key) => (
                    <li key={key}>
                      <div style={{ width: '200px' }}>
                        {result.infinitive}
                        {' '}
                        {result.result === 'correct' ? (
                          <FontAwesomeIcon icon={faCircleCheck} color="green" />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} color="#cf4141" />
                        )}
                      </div>
                      <div style={{ fontSize: '14px' }}>
                        {result.result === 'wrong' && ` (The correct answer is: ${result.simplePast} | ${result.pp}. Your answer was: ${result.answerPastSimple} | ${result.answerPP})`}
                      </div>

                    </li>
                  ))}
              </ul>
            </div>

            <div className={st.resultsButtonContainer}>
              <button
                className={st.button}
                onClick={handleToggleResults}
              >
                Return to practicing
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={st.wordsContainer}>
              <div className={st.mainWord}>
                {word?.infinitive}
              </div>

              <Input
                label="Past simple"
                value={pastSimple}
                onChange={(e) => setPastSimple(e.target.value)}
              />

              <Input
                label="Past participle"
                value={pastParticiple}
                onChange={(e) => setPastParticiple(e.target.value)}
              />
            </div>

            <div>
              <div className={st.footer}>

                <Button onClick={handleShowAnswers}>Show answers</Button>

                <div className={st.buttonContainer}>
                  <Button onClick={handleNext}>Next</Button>
                </div>
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

export default IrregularVerbs;
