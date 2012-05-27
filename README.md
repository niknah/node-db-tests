node-db-tests
=============

Assorted nodejs database driver tests - May/2012


There're various benchmarks around but I couldn't find any for nodejs.  I wanted to test the nodejs driver as well.

The tests are simple create, get, remove 10000 times(30000 requests total). The database is empty so it doesn't test any indexing.  Tests are async so it waits for the request to complete before continuing, it doesn't test the maximum load that a server can handle but the response speed per request.  'sync' is runned before starting and the time includes running 'sync' at the end to save everything to disk.

Here're the speeds tested using the same laptop...

<table>
<tr><td>0:00.3</td><td>GDBM v1.8.3</td></tr>
<tr><td>0:00.8</td><td>LevelDB v1.2</td></tr>
<tr><td>0:04.3</td><td>MongoDB v2.0.5</td></tr>
<tr><td>0:11.7</td><td>Kyoto Tyrant v0.9.55 .kct (kyoto-client)</td></tr>
<tr><td>0:12.7</td><td>Cassandra v1.1.0 (helenus)</td></tr>
<tr><td>1:05.0</td><td>Riak v1.1.2 with protobuf (riak-js)</td></tr>
<tr><td>2:25.0</td><td>Riak v1.1.2 without protobuf (riak-js)</td></tr>
<tr><td>2mins for 1000 tests</td><td>OrientDB v1.0.1</td></tr>
<tr><td>33secs for 100 tests</td><td>sqlite v3.1.3, prepared statements (sqlite3)</td></tr>
</table>

There's obviously something wrong with OrientDB & sqlite drivers.  The full 10k tests would have taken a lot more time.

