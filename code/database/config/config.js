module.exports = {
  "development": {
    "username": "admin",
    "password": "Juanma.1991",
    "database": "Sys",
    "host": "database-globaltech.ccgyy5spftmr.us-east-1.rds.amazonaws.com",
    "username": "root",
    "port": "5506",
    "password": "jjWgjtRTZilHTCiGGP0U",
    "database": "railway",
    "host": "containers-us-west-59.railway.app",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {

    "username": "admin",
    "password": "Juanma.1991",
    "database": "Sys",
    "host": "database-globaltech.ccgyy5spftmr.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
  },
  "production": {
    "username": "admin",
    "password": "Juanma.1991",
    "database": "Sys",
    "host": "database-globaltech.ccgyy5spftmr.us-east-1.rds.amazonaws.com",

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