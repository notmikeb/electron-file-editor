'use strict';

const path = require('path');
const fs = require('fs');
const os = require('os');
const workPath = path.join(os.homedir(),'extrategy-electron');

const init = () => {
    return new Promise((resolve, reject) => {
        fs.mkdir(workPath, () => {
            resolve();
        });
    });
};

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

const remove = (file) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(workPath,file), (err) => {
            if(err){
                reject(err)
            }else{
                resolve(list());
            }
        });
    });
};


module.exports = {
    init:init,
    list:list,
    remove:remove
};
