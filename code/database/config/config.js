module.exports = {
  "development": {
    "username": "admin",
    "password": "Juanma.1991",
    "database": "sys",
    "host": "database-globaltech.ccgyy5spftmr.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {
    "username": "admin",
    "password": "Juanma.1991",
    "database": "sys",
    "host": "database-globaltech.ccgyy5spftmr.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
  },
  "production": {
    "username": "admin",
    "password": "Juanma.1991",
    "database": "sys",
    "host": "database-globaltech.ccgyy5spftmr.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
  }
}
