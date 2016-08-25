import React from 'react';

class MissedLetters extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.missedLetters.length !== this.props.missedLetters.length;
    }

    render() {
        return (
            <div className="missed-letters-container">
                <h2 className="title">You missed:</h2>
            <span className="missed">
                {this.props.missedLetters.join('')}
            </span>
            </div>
        );
    };
}

export default MissedLetters;