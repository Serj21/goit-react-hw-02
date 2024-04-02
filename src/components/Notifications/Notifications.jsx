import React from "react";

const Notifications = ({ totalFeedback }) => {
  return <div>{totalFeedback === 0 && <p>No feedback yet.</p>}</div>;
};

export default Notifications;
