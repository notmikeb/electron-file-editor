'use strict';

const fs = require('fs');

const list = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(process.env.HOME,(err,files)=>{
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
