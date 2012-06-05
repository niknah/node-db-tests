

var memcache = require('memcache');

var client = new memcache.Client(11211,'localhost');


client.on('connect', function(){
	// no arguments - we've connected
	function Next(upto) {
		var key='foo'+upto;
		client.set(key, 'bazbazbaz'+upto, function(error, result){
			// all of the callbacks have two arguments.
			// 'result' may contain things which aren't great, but
			// aren't really errors, like 'NOT_STORED'
			client.get(key, function(error, result){


				// lifetime is optional. the default is
				// to never expire (0)

				client.delete(key, function(error, result){

					if(upto>10000) { client.close(); }
					else { Next(upto+1); }
				});
			});
		});


	}
	Next(0);
});


// connect to the memcache server after subscribing to some or all of these events
client.connect()
