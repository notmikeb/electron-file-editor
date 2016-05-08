var shell = require('shelljs');

export default {
    get:() => {
        return new Promise((resolve, reject) => {
            shell.exec('cd legacy && java BuildTime',(err,value) => {
                if(err){
                    reject(err)
                }else{
                    resolve(value);
                }
            });
        });
    }
}
