var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/testSaveContactDB');

//Schema Builder for  Model
var Subscriber = mongoose.model('Subscriber', {
    firstName : String,
    lastName : String,
    email: String,
    phoneNumber :String,
    password : String,
    idNIC : String,
    lastModifiedDate : Date,
    lastModifiedUser : String,
    contacts:[{
      name:String,
      phoneNumber:String
    }]
});
var User = mongoose.model('User', {
    firstName : String,
    lastName : String,
    password : String,
    phoneNumber :String,
    lastModifiedDate : Date,
    lastModifiedUser : String,
    email: String,
    genre:[String]
});

//share Model ...

module.exports.User = User;
module.exports.Subscriber = Subscriber;
