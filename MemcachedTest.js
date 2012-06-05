
var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');


function Next(upto) {
	var key='foo'+upto;
	memcached.set( key,'bazbazbaz'+upto,10000, function( err, result ){
		memcached.get( key, function( err, result ){
			memcached.delete( key, function( err, result ){
				if( err ) console.error( err );
				
				if(upto>=10000) {
					memcached.end(); // as we are 100% certain we are not going to use the connection again, we are going to end it
				} else { 
					Next(upto+1);
				}
			});
		});
	});
}

memcached.connect( '127.0.0.1:11211', function( err, conn ){
	if( err ) throw new Error( err );
	Next(0);
});


