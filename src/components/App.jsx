import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";
import { Notification } from "./Notification/Notification";
import { Description } from "./Description/Description";

function App() {
  const [reviews, setReviews] = useState(() => {
    const currentReviews = localStorage.getItem("review")
    if (currentReviews) { return JSON.parse(currentReviews) }
  else
    {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  }
  });
  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(reviews));
  }, [reviews]);

  const handleGood = () => {
    setReviews({
      good: reviews.good + 1,
      neutral: reviews.neutral,
      bad: reviews.bad,
    });
  };
  const handleNeutral = () => {
    setReviews({
      good: reviews.good,
      neutral: reviews.neutral + 1,
      bad: reviews.bad,
    });
  };
  const handleBad = () => {
    setReviews({
      good: reviews.good,
      neutral: reviews.neutral,
      bad: reviews.bad + 1,
    });
  };
  const handleReset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const allFeedback = reviews.good + reviews.neutral + reviews.bad;
  const educt = Math.round(
    ((reviews.good + reviews.neutral) / allFeedback) * 100
  );
  return (
    <>
      <Description />
      <Options
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
        handleReset={handleReset}
        allFeedback={allFeedback}
      />
      <div>
        {allFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            good={reviews.good}
            neutral={reviews.neutral}
            bad={reviews.bad}
            allFeedback={allFeedback}
            educt={educt}
          />
        )}
      </div>
    </>
  );
}

export default App;
