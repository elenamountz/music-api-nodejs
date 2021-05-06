require('dotenv').config();
const config = require('./config');
const appRouter = require('./router/app');

// Initialize router
const app = appRouter.init();

// Start server
app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});