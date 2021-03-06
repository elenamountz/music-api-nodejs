const config = {
  port: process.env.PORT || 8080,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  fileMaxSize: process.env.FILE_MAX_SIZE,
};

module.exports = config;