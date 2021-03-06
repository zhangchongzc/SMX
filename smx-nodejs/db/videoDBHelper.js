var dbHelper = require('./dbHelper');
var conn = dbHelper.getConn();

exports.addVideo = function(videoname,username,url,degree,picurl,describe,callback){
    var degree = arguments[3]?arguments[3]:0;
    var picurl = arguments[4]?arguments[4]:null;
    var sql = "INSERT INTO video(videoname,username,url,degree,picurl,describe) VALUES ('"+videoname+"',"+username+"," +
        ""+url+","+degree+","+picurl+","+descrirbe+")";
    conn.query(sql,function(err,rows,fields){
        if(err){
            console.error(err);
        }
        callback(rows);
    })
}

exports.getVideo = function(name,callback){
    var sql = "SELECT id,videoname,username,url,degree,picurl,describe as videoid,'发布者',videourl,'视频播放次数',picurl,'视频描述' " +
        "from video WHERE videoname = "+name+"";
    conn.query(sql,function(err,rows,fields){
        if(err){
            console.error(err);
        }
        callback(rows);
    })
}

exports.searchVideo = function(word,callback){
    var sql = "SELECT id,videoname,username,url,degree,picurl,describe as videoid,'发布者',videourl,'视频播放次数' ,picurl,'视频描述'from video " +
        "WHERE CONCAT(videoname,username,describe) LIKE '%"+word+"%' )";
    conn.query(sql,function(err,rows,fields){
        if(err){
            console.error(err);
        }
        callback(rows);
    })
}
