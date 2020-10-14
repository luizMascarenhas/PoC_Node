const express = require('express')
const bodyParser = require('body-parser')
const app = express ()

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mask4685:1234567890@lmfm.dqadj.mongodb.net/LMFM";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("LMFM");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});