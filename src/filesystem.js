'use strict';

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const filterFiles = (files) => {
    return _.filter(files,(file) => file.endsWith('.extrategy'));
};

const list = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(os.homedir(),(err,files)=>{
            if(err){
                reject(err)
            }else{
                resolve(filterFiles(files));
            }
        });
    });
};

module.exports = {
    list:list
};
