require('dotenv').config();
const config = require('./config');
const appRouter = require('./router/app');
const db = require('./data/infrastructure/db');

// Initialize router
const app = appRouter.init();

// Start server
app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});

// Initialize and connect to db
(async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    await db.close();
  }
})();