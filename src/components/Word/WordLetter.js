import React from 'react';

class WordLetter extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.type !== this.props.type;
    }

    render() {
        return (
            <div className={typeof this.props.type === 'undefined' ? 'letter empty' : 'letter filled'}>
                {this.props.type ? this.props.letter : ''}
            </div>
        )};
}

export default WordLetter;