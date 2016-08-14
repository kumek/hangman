import React from 'react';

import WordLetter from './WordLetter';

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxWordLength: props.maxWordLength
        };
    }

    getLetters(typedLetters) {
        var word = (new Array(this.state.maxWordLength - this.props.word.length).fill(undefined)).concat(this.props.word.split(''))
        return word.map((letter, index) => {
            return (
                <WordLetter key={index} letter={letter} type={typeof letter == 'undefined' ? undefined : typedLetters.indexOf(letter) >= 0}/>
            )
        });
    }

    render() {
        return (
            <div className="word-container">
                {this.getLetters(this.props.typedLetters)}
            </div>
        )
    };
}

export default Word;