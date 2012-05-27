node-db-tests
=============

Assorted nodejs database module tests - May/2012


There're various benchmarks around but I couldn't find any for nodejs.  I wanted to test the nodejs module as well.

The tests are simple create, get, remove 10000 times(30000 requests total). The database is empty so it doesn't test any indexing.  Tests are async so it waits for the request to complete before continuing, it doesn't test the maximum load that a server can handle but the response speed per request.  'sync' is runned before starting and the time includes running 'sync' at the end to save everything to disk.

Here're the speeds tested using the same laptop...

<table>
<tr><td>Time</td><td>Database</td><td>Module</td></tr>
<tr><td>0:00.4</td><td>GDBM v1.8.3</td><td>gdbm</td></tr>
<tr><td>0:00.8</td><td>LevelDB v1.2</td><td>leveldb</td></tr>
<tr><td>0:03.8</td><td>MongoDB v2.0.5</td><td>mongodb</td></tr>
<tr><td>0:13.2</td><td>Kyoto Tyrant v0.9.55 .kct</td><td>kyoto-client</td></tr>
<tr><td>0:16.4</td><td>Cassandra v1.1.0</td><td>helenus</td></tr>
<tr><td>1:05.0</td><td>Riak v1.1.2 with protobuf</td><td>riak-js</td></tr>
<tr><td>2:25.0</td><td>Riak v1.1.2 without protobuf</td><td>riak-js</td></tr>
<tr><td>2mins for 1000 tests</td><td>OrientDB v1.0.1</td><td>orientdb</td></tr>
<tr><td>33secs for 100 tests</td><td>sqlite v3.1.3, prepared statements</td><td>sqlite3</td></tr>
</table>

There's obviously something wrong with the OrientDB & sqlite modules.  The full 10k tests would have taken a lot of time.
gdbm, leveldb, sqlite are not networked.

If you run 'top' and see no activity but everything feels slow then maybe test out the speed of your modules.

