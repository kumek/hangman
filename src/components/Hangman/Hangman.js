import React from 'react';
import * as HangmanParts from './HangmanParts';

const Hangman = (props) => {
    var hangmanParts = [
        {
            lives: 11,
            el: <HangmanParts.Bar key="hangmanBar"/>
        },{
            lives: 4,
            el: <HangmanParts.LeftHand key="hangmanLeftHand"/>
        },{
            lives: 5,
            el: <HangmanParts.RightHand key="hangmanRightHand"/>
        },{
            lives: 1,
            el: <HangmanParts.RightFoot key="hangmanRightFoot"/>
        },{
            lives: 0,
            el: <HangmanParts.LeftFoot key="hangmanLeftFoot"/>
        },{
            lives: 2,
            el: <HangmanParts.LeftLeg key="hangmanLeftLeg"/>
        },{
            lives: 3,
            el: <HangmanParts.RightLeg key="hangmanRightLeg"/>
        },{
            lives: 9,
            el: <HangmanParts.Neck key="hangmanNeck"/>
        },{
            lives: 10,
            el: <HangmanParts.Head key="hangmanHead"/>
        },{
            lives: 8,
            el: <HangmanParts.Corpus key="hangmanCorpus"/>
        },{
            lives: 6,
            el: <HangmanParts.LeftArm key="hangmanLeftArm"/>
        },{
            lives: 7,
            el: <HangmanParts.RightArm key="hangmanRightArm"/>
        }
    ];

    var partsToRender = () => {
        return hangmanParts.filter((element) => {
            return (element.lives >= props.lives);
        }).map(element => {
            return element.el;
        });
    };

    return (
        <svg id="hangman" viewBox="0 0 600 600" >
            {partsToRender()}
        </svg>
    )
};

export default Hangman;