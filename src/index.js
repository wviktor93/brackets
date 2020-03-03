module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
      return false;
    }

    bracketsConfig = bracketsConfig.map(item =>
      item.join("")
    )

    let count = str.length;

    for (let j = 0; j < count; j++) {
      for (let i = 0; i < bracketsConfig.length; i++) {
        if (str.indexOf(bracketsConfig[i]) >= 0) {
          str = str.replace(bracketsConfig[i], "");
        }
      }
    }

    return str.length === 0 ? true : false;

  }