import React from 'react';

const MissedLetters = (props) => {
    var missedLetters = props.typedLetters.filter(letter => {
        return !props.word.includes(letter);
    });

    return (
        <div className="missed-letters-container">
            <h2 className="title">You missed:</h2>
            <span className="missed">
                {missedLetters.join('')}
            </span>

        </div>
    );
};

export default MissedLetters;