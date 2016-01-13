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
    var i;
    console.log(arr, item);
    while((i = arr.indexOf(item)) >-1){
      arr.splice(i,1);
      i = arr.indexOf(item);
    }

    return arr;
  },

  append : function(arr, item) {
    // arr.splice(arr.length,0,item);
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    // arr.splice(arr.length-1,1);
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
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
