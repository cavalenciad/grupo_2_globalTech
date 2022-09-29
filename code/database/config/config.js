module.exports = {
  "development": {
    "username": "root",
    "password": "Juanma.1991",
    "database": "db_globaltech",
    "host": "localhost",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {
    "username": "sql10522671",
    "password": "QbtIqexaNA",
    "database": "sql10522671",
    "host": "sql10.freemysqlhosting.net",
    "dialect": "mysql",
  },
  "production": {
    "username": "sql10522671",
    "password": "QbtIqexaNA",
    "database": "sql10522671",
    "host": "sql10.freemysqlhosting.net",
    "dialect": "mysql",
  }
}
