
var helenus = require('helenus'),
      pool = new helenus.ConnectionPool({
        hosts      : ['localhost:9160'],
        keyspace   : 'DEMO',
        user       : 'test',
        password   : 'test1233',
        timeout    : 3000
        //cqlVersion : '3.0.0' // specify this if you're using Cassandra 1.1 and want to use CQL 3
      });

 pool.connect(function(err, keyspace){
    if(err){
      throw(err);
    }

    //first retreive the column family from the server
    //helenus will cache column families it has already seen
    keyspace.get('Users', function(err, cf){
      if(err){
        throw(err);
      }

function Next(upto) {
	var key='foo'+upto;
      //insert something into the column family
      cf.insert(key, {'bar':'bazbazbaz'+upto}, function(err){
        if(err){
          throw(err);
        }

        //get what we just put in
        //the driver will return a Helenus.Row object just like CQL
        cf.get(key, function(err, row){
          if(err){
            throw(err);
          }

//console.log( row.get('bar').value.toString()); // => baz

        cf.remove(key, function(err, row){
          if(err){
            throw(err);
          }

if(upto<10000) {
	Next(upto+1);
} else {
		pool.close();
}

        });

        });
      });
}
Next(0);

    });

  });
