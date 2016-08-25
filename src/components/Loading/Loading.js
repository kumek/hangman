import React from 'react';

const Loading = (props) => {
    if(props.loading)
        return (
            <div id="gameOver" className="info">
                <h1 className="title">Loading ...</h1>
                <span className="loader"></span>
            </div>
        );
    return null;
};

export default Loading;