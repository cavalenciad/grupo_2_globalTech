module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "password": "admin",
    "database": "db_globaltech",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {
    "username": "root",
    "password": "",
    "password": "admin",
    "database": "db_globaltech",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "password": "admin",
    "database": "db_globaltech",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
