const Total = ({ parts }) => {
  let counter = 0;
  parts.forEach((part) => {
    counter += part.exercises;
  });
  return (
    <div>
      <p>
        <b>Number of exercises: {counter}</b>
      </p>
    </div>
  );
};

export default Total;
