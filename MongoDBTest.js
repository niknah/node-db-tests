
var mongo=require('mongodb');
var assert=require('assert');

var client = new mongo.Db('test', new mongo.Server("127.0.0.1", 27017, {})),
    test = function (err, collection) {

function Next(upto) {
	var key='foo'+upto;
      collection.insert({key:'barbarbar'+upto}, function(err, docs) {


        collection.count(function(err, count) {
          assert(1<=count);
        });

        // Locate all the entries using find
        collection.find({'id':docs._id}).toArray(function(err, results) {
          assert(1==results.length);
          assert(results[0].a !="");

collection.remove({'id':docs._id},function() {
          // Let's close the db
if(upto<10000) {
	Next(upto+1);
} else {
          client.close();
}
});
	

        });
      });
}
Next(0);

    };

client.open(function(err, p_client) {
  client.collection('test_insert', test);
});
