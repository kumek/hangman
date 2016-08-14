import React from 'react';
import * as HangmanParts from './HangmanParts';

const Hangman = (props) => {
    return (
        <svg id="hangman" viewBox="0 0 600 600" >
            <HangmanParts.Bar />
            <HangmanParts.Neck />
            <HangmanParts.Head />
            <HangmanParts.Corpus />
            <HangmanParts.LeftHand />
            <HangmanParts.RightHand />
            <HangmanParts.LeftArm />
            <HangmanParts.RightArm />
            <HangmanParts.LeftFoot />
            <HangmanParts.RightFoot />
            <HangmanParts.LeftLeg />
            <HangmanParts.RightLeg />
        </svg>
    )
};

export default Hangman;