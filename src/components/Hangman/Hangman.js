import React from 'react';
import * as HangmanParts from './HangmanParts';

const Hangman = (props) => {
    var hangmanParts = [
        {
            lives: 11,
            el: <HangmanParts.Bar />
        },{
            lives: 4,
            el: <HangmanParts.LeftHand />
        },{
            lives: 5,
            el: <HangmanParts.RightHand />
        },{
            lives: 1,
            el: <HangmanParts.RightFoot />
        },{
            lives: 0,
            el: <HangmanParts.LeftFoot />
        },{
            lives: 2,
            el: <HangmanParts.LeftLeg />
        },{
            lives: 3,
            el: <HangmanParts.RightLeg />
        },{
            lives: 9,
            el: <HangmanParts.Neck />
        },{
            lives: 10,
            el: <HangmanParts.Head />
        },{
            lives: 8,
            el: <HangmanParts.Corpus />
        },{
            lives: 6,
            el: <HangmanParts.LeftArm />
        },{
            lives: 7,
            el: <HangmanParts.RightArm />
        }
    ];

    var partsToRender = () => {
        return hangmanParts.filter(element => {
            return (element.lives >= props.lives);
        }).map(element => {
            return element.el;
        });
    };

    console.log(partsToRender());

    return (
        <svg id="hangman" viewBox="0 0 600 600" >
            {partsToRender()}
        </svg>
    )
};

export default Hangman;