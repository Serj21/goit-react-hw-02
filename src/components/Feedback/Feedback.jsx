import PropTypes from "prop-types";
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

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;
