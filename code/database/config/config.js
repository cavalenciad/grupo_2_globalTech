module.exports = {
  "development": {
    "username": "root",
    "port": "5506",
    "password": "jjWgjtRTZilHTCiGGP0U",
    "database": "railway",
    "host": "containers-us-west-59.railway.app",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {
    "username": "root",
    "port": "5506",
    "password": "jjWgjtRTZilHTCiGGP0U",
    "database": "railway",
    "host": "containers-us-west-59.railway.app",
    "dialect": "mysql",
  },
  "production": {
    "username": "root",
    "port": "5506",
    "password": "jjWgjtRTZilHTCiGGP0U",
    "database": "railway",
    "host": "containers-us-west-59.railway.app",
    "dialect": "mysql",
  }
}