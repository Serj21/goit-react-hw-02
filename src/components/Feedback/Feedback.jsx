import React from "react";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      {totalFeedback > 0 && (
        <div>
          <h2>Feedback:</h2>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad:{feedback.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>
            Positive Percentage{" "}
            {isNaN(positivePercentage) ? 0 : positivePercentage}%
          </p>
        </div>
      )}
    </div>
  );
};
export default Feedback;
