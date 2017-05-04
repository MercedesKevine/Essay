var mongoose = require('mongoose');
var Subscriber = require('../../models/db/db').Subscriber;
/***  here , we need to share these methods with other moduls ***/
//** Interface Public methods ...**//
module.exports.list = list;
module.exports.create = create;
module.exports.update = update;
module.exports.read = read;
module.exports.del = del;

function list (req, res) {
  Subscriber.find(function(err, results) {
      if (err) { console.log(err); }

      res.send(results);
      console.log("list objet ..."+results);
  });
};

function create (req, res) {
  var subscriber = new Subscriber(req.body);
  subscriber.save(function(err,doc) {
      if (err) { console.log(err); }

      res.send(doc);
      console.log("create objet ..."+doc);
  });
};


function update (req, res) {
    var id = req.params._id;
    Subscriber.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: {firstName: req.body.firstName ,
              lastName:req.body.lastName,
              email: req.body.email,
              phoneNumber: req.body.phoneNumber,
              password: req.body.password,
              idNIC:req.body.idNIC,
              lastModifiedDate: new Date(),
              lastModifiedUser:req.body.lastModifiedUser,
              contacts : req.body.contacts
            }
    }, function(err,doc) {
        if (err) { console.log(err); }

        res.send(doc);
        console.log("update objet ..."+doc);
    });


};

function del (req, res) {
      var id = req.params._id;
      Subscriber.remove({ _id: mongoose.Types.ObjectId(id) }, function(err,doc) {
          if (err) { console.log(err); }
          res.send(doc);
          console.log("not delete objet ..."+doc);
      });
};

function read (req, res) {
	var id = req.params._id;
	console.log("cool a l'interrieur...");
	Subscriber.findOne({_id:mongoose.Types.ObjectId(id)},
		function(err, doc){
			res.send(doc);
      console.log("read objet ..."+doc);
		});
};

//** Interface Private methods **/
