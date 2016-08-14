import React from 'react';

const WordLetter = (props) => {
    return (
        <span className={typeof props.type == 'undefined' ? 'letter empty' : 'letter filled'}>
            {props.type ? props.letter : ''}
        </span>
    );
};

export default WordLetter;