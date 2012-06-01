
var redis = require("redis"),
	client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
	console.log("Error " + err);
});

function Next(upto) {
	var key='foo'+upto;
	client.set(key, "bazbazbaz"+upto, function(err,i) {
		client.get(key, function(err,i) {
//			redis.print(err,i);
			client.del(key, function(err,i) {
				if(upto<10000) { Next(upto+1); }
				else {
					client.quit();
				}
			});
		});
	});
}
Next(0);
