node-db-tests
=============

Assorted nodejs database module tests - May/2012


I've been shopping for a database to use.  There're various database benchmarks around but I couldn't find any for nodejs.  I wanted to test the nodejs module as well.

The tests are simple create, get, remove 10000 times(30000 requests total). The database is empty.  Tests are synced so it waits for the request to complete before continuing.  'sync' is executed before the start of the tests.

It tests the response speed per request.  In a simple database more queries are needed to grab the data than an sql database where everything is usually sent back in one query.

Here're the speeds, tested using the same laptop...

<table>
<tr><td>Time</td><td>Database</td><td>NPM Module</td><td>Net</td></tr>
<tr><td>0:00.2</td><td>GDBM v1.8.3</td><td>gdbm</td><td>N</td></tr>
<tr><td>0:00.6</td><td>LevelDB v1.2</td><td>leveldb</td><td>N</td></tr>
<tr><td>0:01.7</td><td>Memcached v1.4.13</td><td>memcache</td><td>Y</td></tr>
<tr><td>0:01.9</td><td>redis v2.4.14</td><td>redis</td><td>Y</td></tr>
<tr><td>0:02.7</td><td>Memcached v1.4.13</td><td>memcached</td><td>Y</td></tr>
<tr><td>0:09.0</td><td>MongoDB v2.0.5</td><td>mongodb</td><td>Y</td></tr>
<tr><td>0:11.7</td><td>Kyoto Tyrant v0.9.55 .kct (similar results for .kch)</td><td>kyoto-client</td><td>Y</td></tr>
<tr><td>0:30.0</td><td>Cassandra v1.1.0</td><td>helenus</td><td>Y</td></tr>
<tr><td>0:56.0</td><td>Riak v1.1.2 with protobuf</td><td>riak-js</td><td>Y</td></tr>
<tr><td>1:48.0</td><td>Riak v1.1.2</td><td>riak</td><td>Y</td></tr>
<tr><td>2:14.0</td><td>Riak v1.1.2 without protobuf</td><td>riak-js</td><td>Y</td></tr>
<tr><td>2mins for 1000 tests</td><td>OrientDB v1.0.1</td><td>orientdb</td><td>Y</td></tr>
<tr><td>33secs for 100 tests</td><td>sqlite v3.1.3, prepared statements</td><td>sqlite3</td><td>N</td></tr>
</table>

There's obviously something wrong with the OrientDB & sqlite modules, there's not much CPU activity when I run it.  The full 10k tests would have taken a lot of time.  If you run 'top' and see no activity but everything feels slow then maybe test out the speed of your modules.

