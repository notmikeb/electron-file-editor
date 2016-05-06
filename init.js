'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './src/components/App';

module.exports = function(target) {
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App></App>
        </MuiThemeProvider>,
        target
    );
}
