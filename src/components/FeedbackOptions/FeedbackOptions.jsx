import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ButtonsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedBack}) => {
return (
    <ButtonsList>
        {options.map((data) => (
        <li key={nanoid()}>
            <button className={data} type="button" onClick={() => onLeaveFeedBack(data)}>{data}</button>
        </li>))} 
    </ButtonsList>
)}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
}

export default FeedbackOptions