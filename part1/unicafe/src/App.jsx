import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ stat, value }) => {
  return (
    <p>
      {stat}:{value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total > 0) {
    return (
      <>
        <h1>Stats</h1>
        <StatisticLine stat="good" value={good} />
        <StatisticLine stat="neutral" value={neutral} />
        <StatisticLine stat="bad" value={bad} />
        <StatisticLine stat="total" value={total} />
        <StatisticLine stat="average" value={average} />
        <StatisticLine stat="positive" value={positive} />
      </>
    );
  }
  return <h3>No feedback given</h3>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage((average + 1) / (total + 1));
    setPositive((good + 1) / (total + 1));
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setPositive(good / (total + 1));
  };
  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
    setAverage((average - 1) / (total + 1));
    setPositive(good / (total + 1));
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
