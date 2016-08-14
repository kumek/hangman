import React from 'react';
import { render } from 'react-dom';

import App from './components/App';



var setListener = function (callback) {
    window.addEventListener('keydown', callback);
};

render(
    <App setListener={setListener}/>,
    document.getElementById('app')
);

