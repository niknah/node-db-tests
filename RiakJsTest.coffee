
#riak = require('riak-js').getClient({api:'protobuf'})
riak = require('riak-js').getClient()

Next=(upto)->
	key='foo'+upto
	riak.save('xxx',key,{'bar':'bazbazbaz'+upto},()->
		riak.get('xxx',key,(err,data) ->
#			console.log(JSON.stringify(data));
			riak.remove('xxx',key,()->
				if(upto<10000)
					Next(upto+1);
				else
					riak.end()
			)
		)
	)


Next(0)
