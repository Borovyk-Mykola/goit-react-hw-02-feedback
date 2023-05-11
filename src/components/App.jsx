import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section'

export class App extends React.Component {
  state = {good: 0, neutral: 0, bad: 0}

  handleIncrementGood = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,        
    }));
  };

  handleIncrementNeutral = () => {
      this.setState(prevState => ({
          neutral: prevState.neutral + 1,        
      }));
  };

  handleIncrementBad = () => {
      this.setState(prevState => ({
          bad: prevState.bad + 1,        
      }));
  };

  countTotalFeedback = () => {
    const{good, neutral, bad} = this.state;
    return good + neutral + bad;       
  };

  countPositiveFeedback = () => {
    const{good, neutral, bad} = this.state;
    return (good / (good + neutral + bad) * 100).toFixed(0); 
  };

  render() {
    const{good, neutral, bad} = this.state;
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
        <FeedbackOptions 
        handleIncrementGood={this.handleIncrementGood}
        handleIncrementNeutral={this.handleIncrementNeutral}
        handleIncrementBad={this.handleIncrementBad}>   
        </FeedbackOptions>
      </Section>
      { good + neutral + bad > 0 ?
      <Section title="Statistics">
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedback()}>
        </Statistics>
      </Section> : 
      <Notification message="There is not Feadback"></Notification> }
    </div>
  )};
};