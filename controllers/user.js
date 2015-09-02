/**
 * Created by zoey on 2015/8/11.
    */
var response = require("../common/response")
var User = require("../models/user")

exports.reg = function(req,res){
    User.create(req.query,function(err,rows){
        if(err){
            return res.json(response.buildError())
        }
        res.json(response.buildOK(rows))
    })
}
exports.find = function(req,res) {
    User.find({}, function (err, rows) {
        if (err) {
            return res.json(response.buildError())
        }
        res.json(response.buildOK(rows))
    })
}
//?username=a&oldpassword=b&newpassword=c
exports.setPassword=function(req,res) {
    //[{username:'a',password:"b"}]
    //第一种
    //User.find({username: req.query.username,password:req.query.oldpassword}, function (err, users) {
    //    if (err||users.length==0) {
    //        return res.json(response.buildError())
    //    }
    //    console.log(users)
    //    console.log(JSON.stringify(users))
    //    users[0].password = req.query.newpassword
    //    users[0].save(function (err, rows) {
    //        if (err) {
    //            return res.json(response.buildError())
    //        }
    //        res.json(response.buildOK(rows))
    //    })
    //})
    //第二种
    User.update({username: req.query.username,password:req.query.oldpassword},{password:req.query.newpassword},function(err,docs){
        if (err) {
            return res.json(response.buildError())
        }
        console.log(docs)
        res.json(response.buildOK())
    })
}
