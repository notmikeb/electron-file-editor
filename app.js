'use strict';

const filesystem = require('./src/filesystem');

const init = () => {

    filesystem.init().then(() => {
        filesystem.list().then((files) => {
            console.log(files);
        });
    });

};

init();
