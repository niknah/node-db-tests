
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.sqlite');

db.serialize(function() {
	db.run("CREATE TABLE test (id varchar(32) primary key,foo TEXT)");

	var stmt = db.prepare("INSERT INTO test VALUES (?,?)");
	var delstmt = db.prepare("delete from test where id = ?");
	var selstmt = db.prepare("SELECT * FROM test where id = ?");
	function Next(upto) {
console.log(upto);
		var key='foo'+upto;
		stmt.run(key,'bazbazbaz'+upto);
		selstmt.all(key, function(err,rows) {
			delstmt.run(key);
			if(upto<100) {
				Next(upto+1);
			} else { 
				stmt.finalize();
				delstmt.finalize();
				selstmt.finalize();
				db.close(); 
			}
		});
	}
	Next(0);

});

