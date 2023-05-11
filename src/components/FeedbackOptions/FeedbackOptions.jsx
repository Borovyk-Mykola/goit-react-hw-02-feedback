import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({handleIncrementGood, handleIncrementNeutral, handleIncrementBad}) => {
return (
    <ul>
        <li>
            <button type="button" onClick={handleIncrementGood}>Good</button>
        </li>
        <li>
            <button type="button" onClick={handleIncrementNeutral}>Neutral</button>
        </li>
        <li>
            <button type="button" onClick={handleIncrementBad}>Bad</button>
        </li>    
    </ul>
)}

FeedbackOptions.propTypes = {
    handleIncrementGood: PropTypes.func.isRequired,
    handleIncrementNeutral: PropTypes.func.isRequired,
    handleIncrementBad: PropTypes.func.isRequired,
}

export default FeedbackOptions