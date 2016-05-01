'use strict';

const fs = require('fs');
const os = require('os');

const list = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(os.homedir(),(err,files)=>{
            if(err){
                reject(err)
            }else{
                resolve(files);
            }
        });
    });
};

module.exports = {
    list:list
};
