import React from 'react';
import '../css/style.scss';

import MissedLetters from './MissedLetters/MissedLetters';
import Word from './Word/Word';
import Hangman from './Hangman/Hangman';
import GameOver from './GameOver/GameOver';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "katarakta",
            typedLetters: ['k', 'a', 'm', 'c', 'z', 'u', 'ó', 'r', 'h', 'l', 'p', 'i', 'f', 'w'],
            lives: 11,
            gameOver: false
        };
    }

    render() {
        return (
            <div>
                {this.state.gameOver ? <GameOver /> : ''}
                <Hangman lives={this.state.lives}/>
                <MissedLetters word={this.state.word} typedLetters={this.state.typedLetters}/>
                <Word word={this.state.word} typedLetters={this.state.typedLetters}/>
            </div>
        )
    };
}

export default App;
