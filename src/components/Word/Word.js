import React from 'react';

import WordLetter from './WordLetter';

class Word extends React.Component {
    constructor(props) {
        super(props);

        //Generate word array from word string passed in props
        //If word is shorter than 11 letters, empty strings should be at the beginning
        //TODO: Change that magic number :)
        this.state = {
            word: (new Array(11 - props.word.length).fill(undefined)).concat(props.word.split(''))
        };
    }
    getLetters(typedLetters) {
        return this.state.word.map((letter, index) => {
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