import React from 'react';

const GameWon = (props) => {
    return (
        <div id="gameOver" className="info">
            <h1 className="title">You win!</h1>
            <button onClick={props.restartGame}>New word</button>
        </div>
    )
};

export default GameWon;