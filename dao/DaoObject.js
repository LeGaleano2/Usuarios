<<<<<<< HEAD
const Connection = require('./Connection');

module.exports = class DaoObject{
    conn = null;
    constructor(db = null){
        if(db){
            this.conn = db;
        }
       
    }

    async init(){
        if (!this.conn) {
          try{
            this.conn = await Connection.getDB();
          } catch(ex) {
            console.log('DaoObject : ', ex);
            throw ex;
          }
        }
      }

      all(sqlstr, sqlParamsArr) {
        return new Promise(
          (resolve, reject) => {
            this.conn.all(
              sqlstr,
              sqlParamsArr,
              (err, rows) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(rows);
                }
              }
            );
          }
        );
      }


      get(sqlstr, sqlParamsArr){
        return new Promise(
          (resolve, reject)=>{
            this.conn.get(
              sqlstr,
              sqlParamsArr,
              (err, row)=>{
                if(err){
                  reject(err);
                }else {
                  resolve(row);
                }
              }
            );
          }
        );
      }


      run( sqlstr, sqlParamArr) {
        return new Promise((resolve, reject)=>{
          let res = this.conn.run(
            sqlstr,
            sqlParamArr,
            function (err) {
              if(err) {
                reject(err);
              } else {
                resolve(this);
              }
            }
           )
        });
     }

=======
const Connection = require('./Connection');

module.exports = class DaoObject{
    conn = null;
    constructor(db = null){
        if(db){
            this.conn = db;
        }
       
    }

    async init(){
        if (!this.conn) {
          try{
            this.conn = await Connection.getDB();
          } catch(ex) {
            console.log('DaoObject : ', ex);
            throw ex;
          }
        }
      }

      all(sqlstr, sqlParamsArr) {
        return new Promise(
          (resolve, reject) => {
            this.conn.all(
              sqlstr,
              sqlParamsArr,
              (err, rows) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(rows);
                }
              }
            );
          }
        );
      }


      get(sqlstr, sqlParamsArr){
        return new Promise(
          (resolve, reject)=>{
            this.conn.get(
              sqlstr,
              sqlParamsArr,
              (err, row)=>{
                if(err){
                  reject(err);
                }else {
                  resolve(row);
                }
              }
            );
          }
        );
      }


      run( sqlstr, sqlParamArr) {
        return new Promise((resolve, reject)=>{
          let res = this.conn.run(
            sqlstr,
            sqlParamArr,
            function (err) {
              if(err) {
                reject(err);
              } else {
                resolve(this);
              }
            }
           )
        });
     }

>>>>>>> 2e24b54e6ccf07d04d8a4dd0c19cbad60c5bfe67
}