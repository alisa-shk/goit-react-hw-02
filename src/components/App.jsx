import { useEffect, useState } from "react";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import Notification from "./Notification/Notification"

const App = () => {

  const initFeedbackState = JSON.parse(localStorage.getItem('feedbackTypes')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  

  const [feedbackTypes, setFeedbackTypes] = useState(initFeedbackState);

  useEffect(() => { localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes)) }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prev => ({...prev, [feedbackType]: prev[feedbackType] + 1}))
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedbackPercent = Math.round((feedbackTypes.good / totalFeedback) * 100);
  
  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}/>) : (
        <Notification message="No feedback yet"/>)}
    </>
  )
};

export default App;