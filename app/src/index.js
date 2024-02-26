var runMigrations = require('./runMigrations');
var server = require('./server');

runMigrations();
server();