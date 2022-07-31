import { useState } from 'react'

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return <>
    <dt>{text}</dt>
    <dd>{value}</dd>
  </>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const average = () => ((good - bad) / total()).toFixed(2);
  const positive = () => ((good) / total() * 100).toFixed(0) + '%';

  if (!total()) {
    return (<p>No feedback yet</p>)
  }
  return (
    <dl>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total()} />
      <StatisticLine text="Average" value={average()} />
      <StatisticLine text="Positive" value={positive()} />
    </dl>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button click={increaseGood} text="Good" />
      <Button click={increaseNeutral} text="Neutral" />
      <Button click={increaseBad} text="Bad" />
      <section>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>
    </div>
  )
}

export default App
