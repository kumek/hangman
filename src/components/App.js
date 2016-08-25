import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';

import MissedLetters from './MissedLetters/MissedLetters';
import Word from './Word/Word';
import Hangman from './Hangman/Hangman';
import GameOver from './GameOver/GameOver';
import GameWon from './GameWon/GameWon';
import Loading from './Loading/Loading';

const MAX_WORD_LENGTH = 11;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            typedLetters: [],
            missedLetters: [],
            guessedLetters: [],
            lives: 11,
            gameOver: false,
            gameWon: false,
            loading: true
        };

        this.props.setListener(this.onKeyPress.bind(this));

        this.setNewGame = this.setNewGame.bind(this);
    }

    fetchNewWord() {
        fetch('http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=given-name&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
            .then((response) => {
                return response.text();
            })
            .then((body) => {
                var word = JSON.parse(body).word.toLowerCase();
                this.setState({
                    loading: false,
                    word
                })
            });
    }

    componentDidMount() {
        //Fetch random word here
        this.fetchNewWord();
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

        //Check if letter is missed or guessed
        if (!this.state.word.includes(letter)) {
            var missedLetters = [].concat(this.state.missedLetters);
            missedLetters.push(letter);
            this.setState({
                lives: this.state.lives - 1,
                missedLetters
            });
        } else {
            var guessedLetters = [].concat(this.state.guessedLetters);
            guessedLetters.push(letter);
            this.setState({guessedLetters});
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
            word: '',
            typedLetters: [],
            missedLetters: [],
            guessedLetters: [],
            lives: 11,
            gameOver: false,
            gameWon: false,
            loading: true
        });
        this.fetchNewWord();
    }

    render() {
        return (
            <div>
                <Loading loading={this.state.loading} />
                <GameOver gameOver={this.state.gameOver} restartGame={this.setNewGame}/>
                <GameWon gameWon={this.state.gameWon} restartGame={this.setNewGame}/>
                <Hangman lives={this.state.lives}/>
                <MissedLetters missedLetters={this.state.missedLetters}/>
                <Word word={this.state.word} guessedLetters={this.state.guessedLetters}/>
            </div>
        );
    };
}

export default App;
