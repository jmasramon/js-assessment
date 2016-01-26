exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {
        var binaryString = (num >>> 0).toString(2);
        return parseInt(binaryString[binaryString.length - bit], 10);
        ///10000000
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binaryString = Number(num).toString(2);
        return '00000000'.substr(binaryString.length) + binaryString;
    },

    multiply: function(a, b) {
        return parseFloat((a * b).toFixed(b.toString().length - 2));
    }
};
