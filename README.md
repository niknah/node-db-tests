node-db-tests
=============

Assorted nodejs database module tests - May/2012


There're various database benchmarks around but I couldn't find any for nodejs.  I wanted to test the nodejs module as well.

The tests are simple create, get, remove 10000 times(30000 requests total). The database is empty so it doesn't test any indexing.  Tests are synced so it waits for the request to complete before continuing, it doesn't test the maximum load that a server can handle but the response speed per request. 'sync' is runned before the start of the tests.

Here're the speeds tested using the same laptop...

<table>
<tr><td>Time</td><td>Database</td><td>NPM Module</td></tr>
<tr><td>0:00.5</td><td>GDBM v1.8.3</td><td>gdbm</td></tr>
<tr><td>0:01.9</td><td>LevelDB v1.2</td><td>leveldb</td></tr>
<tr><td>0:06.5</td><td>redis v2.4.14</td><td>redis</td></tr>
<tr><td>0:11.8</td><td>MongoDB v2.0.5</td><td>mongodb</td></tr>
<tr><td>0:20.8</td><td>Kyoto Tyrant v0.9.55 .kct</td><td>kyoto-client</td></tr>
<tr><td>0:42.0</td><td>Cassandra v1.1.0</td><td>helenus</td></tr>
<tr><td>1:52.0</td><td>Riak v1.1.2 with protobuf</td><td>riak-js</td></tr>
<tr><td>3:10.0</td><td>Riak v1.1.2</td><td>riak</td></tr>
<tr><td>3:49.0</td><td>Riak v1.1.2 without protobuf</td><td>riak-js</td></tr>
<tr><td>2mins for 1000 tests</td><td>OrientDB v1.0.1</td><td>orientdb</td></tr>
<tr><td>33secs for 100 tests</td><td>sqlite v3.1.3, prepared statements</td><td>sqlite3</td></tr>
</table>

There's obviously something wrong with the OrientDB & sqlite modules.  The full 10k tests would have taken a lot of time.
gdbm, leveldb, sqlite are not networked.

If you run 'top' and see no activity but everything feels slow then maybe test out the speed of your modules.

