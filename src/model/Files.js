'use strict';

const axios = require('axios');

const list = () => {
    return axios.get('http://localhost:3000/files').then((response) => response.data);
};

const remove = (filename) => {
    return axios.delete('http://localhost:3000/files/' + filename).then((response) => response.data);
};

const getContent = (filename) => {
    return axios.get('http://localhost:3000/files/' + filename).then((response) => response.data);
};

const save = (filename,content) => {
    let body = {
        content:content
    };

    return axios.post('http://localhost:3000/files/' + filename,body).then((response) => response.data);
};


module.exports = {
    list:list,
    remove:remove,
    getContent:getContent,
    save:save
};
