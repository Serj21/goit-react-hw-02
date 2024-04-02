import { useState, useEffect } from "react";
import Descriptions from "./components/Descriptions/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notifications from "./components/Notifications/Notifications";
import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  return (
    <div>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
      />

      <Notifications />
    </div>
  );
};

export default App;
