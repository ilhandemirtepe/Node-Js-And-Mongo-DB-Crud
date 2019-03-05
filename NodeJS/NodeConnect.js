
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
   if (err) throw err;
   var dbo = db.db("SchoolDB");
   var student = { name: "ahmet", surname: "gelder" };
    dbo.collection("Student").insertOne(student, function(err, res) {
     if (err) throw err;
      console.log("1 ögrenci eklendi");
     db.close();
   });


  dbo.collection("Student").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
  var query = { name: "veli" };
  dbo.collection("Student").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  var myquery = { name: "ahmet" };
  var newvalues = { $set: {name: "Mickey", surname: "Canyon 123" } };
  dbo.collection("Student").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document güncellendi");
    db.close();
  });
  var myqueryDelete = { name: 'veli' };
  dbo.collection("Student").deleteOne(myqueryDelete, function(err, obj) {
    if (err) throw err;
    console.log("1 document silindi");
    db.close();
  });
});
