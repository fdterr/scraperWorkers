const Sequelize = require('sequelize');
const db = require('../db');

const Proxy = db.define('proxy', {
  host: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  port: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  level: {
    type: Sequelize.STRING,
    allowNull: false
  },
  http: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  https: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  socks4: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  socks5: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  tunnel: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = Proxy;
