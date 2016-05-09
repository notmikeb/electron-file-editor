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

const remove = (filename) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(workPath,filename), (err) => {
            if(err){
                reject(err)
            }else{
                resolve(list());
            }
        });
    });
};

const getContent = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(workPath,filename),'utf-8', (err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        });
    });
};

const save = (filename,content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(workPath,filename), content, 'utf-8', (err) => {
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
    remove:remove,
    getContent:getContent,
    save:save
};
