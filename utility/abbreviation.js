const abbreviation =  (str) => {
    var res = str.charAt(0);
    var length = str.length;
    var res2 = str.charAt(str.length-1);
    
    var data = `${res}${length}${res2}`;
    return data;
  };
  module.exports = {
    abbreviation
  };