import React from "react";
import PropTypes from 'prop-types';
import { ButtonsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({handleIncrementGood, handleIncrementNeutral, handleIncrementBad}) => {
return (
    <ButtonsList>
        <li>
            <button className="good" type="button" onClick={handleIncrementGood}>Good</button>
        </li>
        <li>
            <button className="neutral" type="button" onClick={handleIncrementNeutral}>Neutral</button>
        </li>
        <li>
            <button className="bad" type="button" onClick={handleIncrementBad}>Bad</button>
        </li>    
    </ButtonsList>
)}

FeedbackOptions.propTypes = {
    handleIncrementGood: PropTypes.func.isRequired,
    handleIncrementNeutral: PropTypes.func.isRequired,
    handleIncrementBad: PropTypes.func.isRequired,
}

export default FeedbackOptions