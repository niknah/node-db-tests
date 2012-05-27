
//var http = require('http');
//http.getAgent();

var kyoto = require('kyoto-client');

// Chained with new
var db = new kyoto.Db('default.kct');
db.open('localhost', 1978);

function Next(upto) {
var key='foo'+upto;
db.set(key,'barbarbar'+upto,function() {
	db.get(key,{},function() {
		db.remove(key,function() {
			if(upto<10000) {
//				setTimeout(function() {
					Next(upto+1);
//				},50);
			} else { 
console.log('close');
				db.close(function() {
				});
			}
		});
	});
});
}
Next(0);

