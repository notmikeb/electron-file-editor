'use strict';

const filesystem = require('./src/filesystem');

const init = () => {
    filesystem.list().then((files) => {
        console.log(files);
    });
};

init();
