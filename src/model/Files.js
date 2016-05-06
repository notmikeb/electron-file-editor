'use strict';

const path = require('path');
const fs = require('fs');
const os = require('os');
const workPath = path.join(os.homedir(),'extrategy-electron');

const list = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(workPath,(err,files)=>{
            if(err){
                reject(err)
            }else{
                resolve(files);
            }
        });
    });
};

const init = () => {
    return new Promise((resolve, reject) => {
        fs.mkdir(workPath, () => {
            resolve();
        });
    });
};

module.exports = {
    init:init,
    list:list
};
