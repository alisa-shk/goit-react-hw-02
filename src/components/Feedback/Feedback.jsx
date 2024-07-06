const Feedback = ({feedbackTypes, totalFeedback, positiveFeedbackPercent}) => {
    return (
        <ul>
            <li>Good: {feedbackTypes.good}</li>
            <li>Neutral: {feedbackTypes.neutral}</li>
            <li>Bad: {feedbackTypes.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedbackPercent}%</li>
        </ul>
    )
};

export default Feedback;