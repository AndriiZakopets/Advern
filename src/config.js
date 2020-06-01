export default {
  port: process.env.PORT || 80,
  mongoUri: 'mongodb://localhost/advern',

  hash: {
    bcrypt: {
      saltRounds: 10,
    },
  },

  jwtSecret: 'superSecretKey',
};
