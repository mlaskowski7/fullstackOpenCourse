const Total = ({ parts }) => {
  const sum = parts.reduce((value, part) => value + part.exercises, 0);

  return (
    <div>
      <p>
        <b>Number of exercises: {sum}</b>
      </p>
    </div>
  );
};

export default Total;
