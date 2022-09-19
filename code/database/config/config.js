module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "database": "db_globaltech",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "db_globaltech",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "sql10520645",
    "password": "EhIl1JbKvM",
    "database": "sql10520645",
    "host": "sql10.freemysqlhosting.net",
    "dialect": "mysql"
  }
}
