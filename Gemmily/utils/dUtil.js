var home = require('../data/data_home.js');
const getData = type => {
  if (type == "home") {
    return home.home;
  }
}

module.exports = {
  getData: getData
}