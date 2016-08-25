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
            lives: 11,
            gameOver: false,
            gameWon: false,
            loading: true
        };

        this.props.setListener(this.onKeyPress.bind(this));

        this.setNewGame = this.setNewGame.bind(this);

    }

    fetchNewWord(callback) {
        fetch('http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=given-name&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
            .then((response) => {
                return response.text();
            })
            .then((body) => {
                var wordnik = JSON.parse(body);
                callback(wordnik.word);
                this.setState({
                    loading: false
                })
            });
    }

    componentWillMount() {
        //Fetch random word here
        this.fetchNewWord(word => {
            this.setState({
                word: word.toLowerCase(),
                loading: false
            });
        })
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
            var missedLetters = [].concat(this.state.missedLetters);
            missedLetters.push(letter);
            this.setState({
                lives: this.state.lives - 1,
                missedLetters
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
            loading: true,
            typedLetters: [],
            missedLetters: [],
            lives: 11,
            gameOver: false,
            gameWon: false
        });
        this.fetchNewWord(word => {
            this.setState({
                word: word.toLowerCase(),
                loading: false
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Loading /> : ''}
                {this.state.gameOver ? <GameOver restartGame={this.setNewGame}/> : ''}
                {this.state.gameWon ? <GameWon restartGame={this.setNewGame}/> : ''}
                <Hangman lives={this.state.lives}/>
                <MissedLetters missedLetters={this.state.missedLetters}/>
                <Word maxWordLength={MAX_WORD_LENGTH} word={this.state.word} typedLetters={this.state.typedLetters}/>
            </div>
        );
    };
}

export default App;
