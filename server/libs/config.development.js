module.exports = {
  database: 'pizzas-dev',
  username: '',
  password: '',
  url: process.env.MONGODB_1_PORT_27017_TCP_ADDR || 'localhost',
  port: process.env.MONGODB_1_PORT_27017_TCP_PORT || '27017',
};
