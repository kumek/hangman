import React from 'react';

const GameOver = (props) => {
    if(props.gameOver)
        return (
            <div id="gameOver" className="info">
                <h1 className="title">Game Over</h1>
                <button onClick={props.restartGame}>New word</button>
            </div>
        )
    return null;
};

export default GameOver;