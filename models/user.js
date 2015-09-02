/**
 * Created by zoey on 2015/8/11.
 */
var mongoose = require('mongoose'),//(µ÷ÓÃmongodb)
    Schema = mongoose.Schema;

var BaseSchema = new Schema({
    username:String,
    password:String,
    createdAt: {type:Date , default:Date.now},
});
var User = mongoose.model('user', BaseSchema,'user');

exports.create = function(obj,cb){
    console.log("obj="+obj)
    //var o = new User(obj);
    //o.save(cb);
    User.create(obj,cb)
}
//create,find,update,remove
exports.find = function(obj,cb){
    User.find(obj,cb)
}
exports.update = function(query,update,cb){
    User.update(query,update,cb)

}