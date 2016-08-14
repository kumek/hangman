import React from 'react';

const GameOver = (props) => {
    return (
        <div id="gameOver" className="info">
            <h1 className="title">Game Over</h1>
            <button onClick={props.restartGame}>New word</button>
        </div>
    )
};

export default GameOver;