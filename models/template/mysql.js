/**
 * 封装mysql pool和基本操作
 */
var mysql = require('mysql');
var config = require('../../config');
var pool = mysql.createPool(config.mysql);
module.exports = {
    query : function(sql, data, callback) {
        if (Array.isArray(data)) {
            pool.getConnection(function(err, client) {// query有三个参数，分别是sql(prepared),参数,callback
                if (err) {
                    if(callback){
                        callback(err);
                    }
                    return;
                }
                client.query(sql, data, function(err, rows) {
                    client.release();
                    if(err){
                        console.error(err);
                        if(callback){
                            callback(err, null);
                        }
                        return;
                    }
                    if(callback){
                        callback(err, rows);// 必须有callback
                    }
                });
            });
        }
        else {
            pool.getConnection(function(err, client) {// query有2个参数，分别是sql,callback
                if (err) {
                    if(data){
                        data(err);
                    }
                    return;
                }
                client.query(sql, function(err, rows) {
                    client.release();
                    if(err){
                        console.error(err);
                        if(data){
                            data(err, null);
                        }
                        return;
                    }
                    if(data){
                        data(err, rows);// 必须有
                    }
                });
            });
        }
    },
    tableInfo:{
        user:'bbb.user',
    }
}