import React from 'react';
import App from '../App';


import WordLetter from './WordLetter';

class Word extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            letters: new Array(this.MAX_WORD_LENGTH).fill(undefined)
        };

        this.getLetters = this.getLetters.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.guessedLetters.length !== this.props.guessedLetters.length) || (nextProps.word !== this.props.word) || (nextProps.showAll);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.word !== this.state.word) {
            this.setState({
                letters: new Array(App.MAX_WORD_LENGTH - nextProps.word.length).fill(undefined).concat(nextProps.word.split(''))
            });
        }
    }

    getLetters() {
        return this.state.letters.map((letter, index) => {
            return (
                <WordLetter key={index} letter={letter}
                            type={typeof letter == 'undefined' ? undefined : this.props.showAll || this.props.guessedLetters.indexOf(letter) >= 0}/>
            )
        });
    }

    render() {
        return (
            <div className="word-container">
                {this.getLetters()}
            </div>
        )
    };
}

export default Word;