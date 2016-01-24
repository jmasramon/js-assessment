exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function(str) {
        return function(str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures: function(arr, fn) {
        var resFuncts = [];
        for (var i = 0; i < arr.length; i++) {
            (function(num) {
                resFuncts.push(function() {
                    return fn(num);
                });
            })(arr[i]);

        }
        return resFuncts;
    },

    partial: function(fn, str1, str2) {
        return function(sufix) {
            return fn(str1, str2, sufix);
        };
    },

    useArguments: function() {
        var res = 0;
        var operands = [].slice.apply(arguments);
        for (var i = operands.length - 1; i >= 0; i--) {
            res += operands[i];
        }
        return res;
    },

    callIt: function(fn) {
        var operands = [].slice.apply(arguments).splice(1);
        return fn.apply(null, operands);
    },

    partialUsingArguments: function(fn) {
        var operands = [].slice.apply(arguments).splice(1);
        return function() {
            operands = operands.concat([].slice.apply(arguments));
            return fn.apply(null, operands);
        };
    },

    curryIt: function(fn) {
        var operands = [].slice.apply(arguments).splice(1);
        var numParams = fn.length;
        return function partial(par) {
            operands = operands.concat([].slice.apply(arguments));
            if (operands.length === numParams) {
                return fn.apply(null, operands);
            } else {
                return partial;
            }
        };
    }
};
