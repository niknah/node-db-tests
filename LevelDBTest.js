
var DB = require('leveldb').DB;
var db = new DB;
db.open("data.leveldb",{create_if_missing: true},function(err,db2) {

console.log('err'+err+','+db2);
function Next(upto) {
  var key = "foo"+upto;
  db.put(key, "barbarbar"+upto, function(err) {
    db.get(key, function(err, value) {
//      console.dir(value); // prints: My Value!
      db.del(key);
if(upto<10000) { Next(upto+1); }
else {
db.close();
}
    });
  });
}
Next(0);


});

