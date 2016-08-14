import React from 'react';

const WordLetter = (props) => {
    return (
        <div className={typeof props.type == 'undefined' ? 'letter empty' : 'letter filled'}>
            {props.type ? props.letter : ''}
        </div>
    );
};

export default WordLetter;