exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0,
        i = arr.length;
    // for (var index in arr) {
    //   sum += parseInt(arr[index]);
    // }

    // for (i = arr.length; i--; ) {
    //   sum += parseInt(arr[i]);
    // }

    // while (i--) {
    //   sum += parseInt(arr[i]);
    // }

    sum  = arr.reduce(function (prev, cur) {
      return prev + cur;
    }, 0);

    return sum;
  },

  remove : function(arr, item) {
    var res = arr,
        i;
    // while((i = res.indexOf(item)) >-1){
    //   res.splice(i,1);
    //   i = res.indexOf(item);
    // }

    res = res.filter(function (elem) {
      if (elem === item) return false;
      return true;
    });

    return res;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
