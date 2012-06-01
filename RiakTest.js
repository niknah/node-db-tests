
var RiakClient = require("riak"), client;

client = new RiakClient(["127.0.0.1:8098"], "client_id", "pool_name");

// turn this on to see an activity trace
client.debug_mode = false;
client.log=function(err) { console.log(err); }

/*
client.on("metrics", function (type, key, val) {
    console.log("metric: " + type + ", " + key + "=" + val);
});
*/

// GET + PUT as modify()
// This mutator function does a simple increment of prop2 with no error checking
var key="foo";
function Next(upto) {
	client.put('xxx',key, "bar", {},function (err) {
		client.get('xxx',key,{},function(err) {
			client.del('xxx',key,function(err) {
				if(upto>10000) {
					process.exit();
				} else Next(upto+1);
			});
		});
	}, {}, function (err, res, obj) {
	    console.error(res.statusCode + ": ", obj);
	    process.exit();
	});
}
Next(0);
