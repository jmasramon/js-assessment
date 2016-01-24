exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regEx = /[0-9]+/;
    return regEx.test(str);
  },

  containsRepeatingLetter : function(str) {
    var regEx = /([a-zA-Z])\1{1,}/;
    return regEx.test(str);

  },

  endsWithVowel : function(str) {
    var regEx = /([aeiou|AEIOU])$/;
    return regEx.test(str);

  },

  captureThreeNumbers : function(str) {
    var regEx = /[0-9]{3}/,
        res;
    res = regEx.exec(str);
    return (res && res[0]) || false;
  },

  matchesPattern : function(str) {
    var regEx = /^\d{3}-\d{3}-\d{4}$/;
    return regEx.test(str);
  },

  isUSD : function(str) {
 

  }
};
