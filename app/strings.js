exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  //   var curElem = str.slice(0, 1),
  //       curAmount = 1,
  //       res = '';

    //  return _.reduce(str.slice(1), function(pre, elem) {
    //   if (elem == curElem) {
    //     if (curAmount < amount){
    //       curAmount++;
    //       return  pre + elem;
    //     }
    //     return pre;
    //   } else {
    //     curElem = elem;
    //     curAmount = 1;
    //     return pre + elem;
    //   }
    // }, curElem);

  var regex = /(.)\1{0,}/g,
      match, res = '';
    while((match = regex.exec(str)) != null) {
      res += match[0].slice(0,amount);
    }
    return res;
  },

  wordWrap: function(str, cols) {
    console.log(str.split(' '));
    var words = str.split(' '),
        line = words.splice(0,1)[0],
        res = '';
    for (var i in words) {
      console.log('res:', res, 'line:', line, line.length, 'word:', words[i], line.length + words[i].length + 1);
      if(line.length >= cols || line.length + words[i].length + 1 > cols){
        res = res + line + '\n';
        line = words[i];
      } else {
        line += (' ' + words[i]);
      }
    }
    if (line != '') res += line;
    console.log('res:', res);
    return res;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
