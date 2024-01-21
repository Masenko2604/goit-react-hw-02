export const Feedback = ({ good, neutral, bad, allFeedback, educt }) => {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>allFeedback: {allFeedback}</p>
      <p>positive: {educt}</p>
    </div>
  );
};