var db = require('../config/database');
var _ = require('underscore');

var Stu_dao = function() {};


Stu_dao.prototype.Stu_find  = function(username, callback) {  //传入id 返回一行
    var sql = "SELECT * FROM stu WHERE userId=?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [username], function(err, results) {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
            connection.release();
        });
    });
};
Stu_dao.prototype.Stu_save = function(username, password, stuname, callback){
    var sql = "INSERT INTO stu SET userId= ?, userPwd= ?, stuName = ?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [username,password,stuname], function(err, results) {
            if (err) {
                callback(true);
                return;

            }
            callback(false, results);
            connection.release();
        });
    });
}
Stu_dao.prototype.Stu_change = function(newpwd, username, callback) {
    var sql = "update stu set userPwd= ? WHERE userId=? ";
    
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [newpwd,username], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};


Stu_dao.prototype.Stu_dele = function(account_number, callback) {
    var sql = "delete from stu WHERE userId=? ";
   
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [account_number], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};

module.exports = Stu_dao;