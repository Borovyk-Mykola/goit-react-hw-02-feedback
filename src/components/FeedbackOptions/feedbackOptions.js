import React from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends React.Component {
    static defaultProps = {
        initialvalue: 0,
    }

    static propTypes = {
        initialvalue: PropTypes.number.isRequired,
    }

    state = {
        value: this.props.initialvalue
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    render() {
        return (
            <ul>
              <li>
                  <button type='button' onClick={this.handleIncrement}>Good</button>
              </li>
              <li>
                  <button type='button' onClick={this.handleIncrement}>Neutral</button>
              </li>
              <li>
                  <button type='button' onClick={this.handleIncrement}>Bad</button>
              </li>
            </ul>
        )
    };
};