import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const total = () => good + neutral + bad;
  const average = () => ((good - bad) / total()).toFixed(2);
  const positive = () => ((good) / total() * 100).toFixed(0) + '%';

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseNeutral}>Neutral</button>
      <button onClick={increaseBad}>Bad</button>
      <section>
        <h2>Statistics</h2>
        <dl>
          <dt>Good</dt>
          <dd>{good}</dd>
          <dt>Neutral</dt>
          <dd>{neutral}</dd>
          <dt>Bad</dt>
          <dd>{bad}</dd>
          <dt>All</dt>
          <dd>{total()}</dd>
          <dt>Average</dt>
          <dd>{average()}</dd>
          <dt>Positive</dt>
          <dd>{positive()}</dd>
        </dl>
      </section>
    </div>
  )
}

export default App
