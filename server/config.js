module.exports = {
  passport: {
    secret: process.env.WEBSIGHT_PASSPORT_SECRET
  },
  server: {
    port: process.env.WEBSIGHT_SERVER_PORT
  },
  mongo: {
    url: process.env.WEBSIGHT_MONGO_URL || 'mongodb://localhost:27017/websight'
  }
};
