'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/components/App';

module.exports = function(target) {
    ReactDOM.render(
        <App></App>,
        target
    );
}
