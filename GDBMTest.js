

var gdbm = require('gdbm');
var db = new gdbm.GDBM();
db.open("test.db", 0, gdbm.GDBM_WRCREAT);
function Next(upto) {
	var key="foo"+upto;
	db.store(key, "bazbazbaz"+upto);
	db.fetch(key);
	db.delete(key);
}
for(var upto=0; upto<10000; upto++) { Next(upto); }
db.close();

