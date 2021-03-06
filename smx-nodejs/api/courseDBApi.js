var db = require('../db/courseDBHelper')

exports.addCourse = function(userId,name,time,objectOriented,content,callback){
    db.addCourse(userId,name,time,objectOriented,content,function (rows) {
        callback(rows);
    })
}

exports.getCourse = function(userId,callback){
    db.getCourse(userId,function(rows){
        callback(rows);
    })
}

exports.search = function(word,callback){
    db.search(word,function(rows){
        callback(rows);
    })
}


exports.joinCourse = function(userId,courseId,callback){
    db.getCourse(userId,courseId,function(rows){
        callback(rows);
    })
}

