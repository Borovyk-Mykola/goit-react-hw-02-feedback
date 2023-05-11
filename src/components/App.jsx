import React from 'react';
import Section from 'components/Section/section';
import Statistics from 'components/Statistics/statistics';
import FeedbackOptions from 'components/FeedbackOptions/feedbackOptions';
import Notification from 'components/Notification/notification';

export class App extends React.Component {
  state = {good:0, neutral:0, bad:0}
  render() {
    const{good, neutral, bad} = this.state
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <Notification message="There is not Feadback"></Notification>
        <FeedbackOptions options={options} onLeaveFeadback={onLeaveFeadback}/>
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
      </Section>
    </div>
  )};
};