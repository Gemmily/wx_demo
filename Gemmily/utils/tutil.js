const changeData = text => {
  if (text == "change_text"){
    var utils = require('./util.js');
    return utils.formatTime(new Date())
  }else {
    return "change_text";
  }
}
module.exports= {
  changeData: changeData
}