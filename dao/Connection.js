<<<<<<< HEAD
//const { accepts } = require('express/lib/request');
const sqlite3 = require('sqlite3');

module.exports = class Connection{
    static db = null;
    static async getDB(){

        if(this.db === null){

            this.db = new sqlite3.Database(`./data/${process.env.SQLITE_DB}`,
        
            (err)=>{
                if(err){
                console.error('Conexion Error: ', err);
                return Promise.reject(err);
            }
            return Promise.resolve(this.db);
        }

            );
            console.log('Connection:', 'Creando Conexion')
        }
        else{
            console.log('Connection:', 'Usando Conexion Cacheada')
        }
        return Promise.resolve(this.db);
};

=======
//const { accepts } = require('express/lib/request');
const sqlite3 = require('sqlite3');

module.exports = class Connection{
    static db = null;
    static async getDB(){

        if(this.db === null){

            this.db = new sqlite3.Database(`./data/${process.env.SQLITE_DB}`,
        
            (err)=>{
                if(err){
                console.error('Conexion Error: ', err);
                return Promise.reject(err);
            }
            return Promise.resolve(this.db);
        }

            );
            console.log('Connection:', 'Creando Conexion')
        }
        else{
            console.log('Connection:', 'Usando Conexion Cacheada')
        }
        return Promise.resolve(this.db);
};

>>>>>>> 2e24b54e6ccf07d04d8a4dd0c19cbad60c5bfe67
}