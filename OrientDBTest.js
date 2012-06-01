
var assert = require("assert");

var orient = require("orientdb"),
    Db = orient.Db,
    Server = orient.Server;


var dbConfig = {
    user_name: "admin",
    user_password: "admin",
};
var serverConfig = {
    host: "localhost",
    port: 2424,
    user_name: "writer",
    user_password: "writer"
};

var server = new Server(serverConfig);
var db = new Db("temp", server, dbConfig);


db.open(function(err) {

    assert(!err, "Error while opening the database: " + err);

    var previous_clusters_length = db.clusters.length;
var clusterId=db.clusters[0].id;

        assert(!err, "Error while adding the data cluster: " + err);

        db.reload(function(err, result) {

            assert(!err, "Error while reloading the database: " + err);

var maxtimes=1000;

function Next(upto) {
//                var firstDocData = "TestClass@nick:\"ThePresident\",subdoc:(name:\"subdoc name\",id_field:42),follows:[],followers:[],name:\"Barack\",surname:\"Obama\",location:#3:2,invitedBy:,salary_cloned:,salary:120.3f";
                var firstDocData = "foo@bar:\"bazbazbaz\"";
                var data = new Buffer(firstDocData.length);
                data.write(firstDocData);

                var recordData = {
                    clusterId: clusterId,
                    content: data,
                    type: "d"
                };


                db.createRecord(recordData, function(err, result) {


                    var clusterPosition = result.position;
                    var rid = "#" + clusterId + ":" + clusterPosition;

                    console.log("Loading record " + rid);

                    db.loadRecord(rid, function(err, result) {



                                var deleteRecord = {
                                    'clusterId': clusterId,
                                    'clusterPosition': clusterPosition,
                                    version: result['@version']
                                };

                                db.deleteRecord(deleteRecord, function(err, result) {

if(upto<maxtimes) { 
	Next(upto+1);
} else {
console.log('done '+maxtimes);
                                    db.command("drop class TestClass", function(err, result) {
                                        db.close();
                                    });
}
                        });
                    });
                });
}
Next(0);
        });


});


