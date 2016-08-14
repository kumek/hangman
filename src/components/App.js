import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';

import MissedLetters from './MissedLetters/MissedLetters';
import Word from './Word/Word';
import Hangman from './Hangman/Hangman';
import GameOver from './GameOver/GameOver';
import GameWon from './GameWon/GameWon';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "katarakta",
            typedLetters: [],
            lives: 11,
            gameOver: false,
            gameWon: false
        };
        console.log(props);
        this.props.setListener(this.onKeyPress.bind(this));

        this.setNewGame = this.setNewGame.bind(this);

    }

    onKeyPress(event) {
        //Check if key pressed is a letter
        if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
            this.newLetterTyped(event.key);
        }
    }

    newLetterTyped(letter) {
        //Check if letter was not used before or if game is not blocked
        if ((this.state.typedLetters.indexOf(letter) < 0)
            && !this.state.gameOver && !this.state.gameWon) {
            this.setNewState(letter);
        }
    }

    setNewState(letter) {
        //Push letter
        var typedLetters = [].concat(this.state.typedLetters);
        typedLetters.push(letter);
        this.setState({
            typedLetters
        });

        //Check if letter is missed or not
        if (!this.state.word.includes(letter)) {
            this.setState({
                lives: this.state.lives - 1
            });
        }

        //Check if game is won
        if (this.state.word.split('').every(letter => {
                return (this.state.typedLetters.indexOf(letter) >= 0);
            })) {
            this.setState({
                gameWon: true
            });
        }

        //Check if game is lost
        if (this.state.lives === 0) {
            this.setState({
                gameOver: true
            });
        }


    }

    setNewGame() {
        this.setState({
            word: "katarakta",
            typedLetters: [],
            lives: 11,
            gameOver: false,
            gameWon: false
        });
    }

    render() {
        return (
            <div >
                {this.state.gameOver ? <GameOver restartGame={this.setNewGame} /> : ''}
                {this.state.gameWon ? <GameWon restartGame={this.setNewGame}/> : ''}

                <Hangman lives={this.state.lives}/>
                <MissedLetters word={this.state.word} typedLetters={this.state.typedLetters}/>
                <Word word={this.state.word} typedLetters={this.state.typedLetters}/>
            </div>
        );
    };
}

export default App;
