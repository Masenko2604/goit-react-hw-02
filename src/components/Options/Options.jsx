export const Options = ({
  handleGood,
  handleNeutral,
  handleBad,
  handleReset,
  allFeedback,
}) => {
  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      {allFeedback !== 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};