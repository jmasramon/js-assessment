exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
    listFiles: function(data, dirName) {
        var fileList = [];
        var dirToList = null;
        var res = null;
        console.log('listing files for ', data.dir, 'dir', dirName);

        function loop(data) {
        		console.log('    looping through', data.dir);
            if (data.files) {
                for (var i in data.files) {
                    if (typeof data.files[i] === 'string') {
                        fileList.push(data.files[i]);
                    } else if (typeof data.files[i] === 'object') {
                        loop(data.files[i]);
                    }
                }
            }
            return fileList;
        }

        function findDir(data, dirName) {
            console.log('  trying with', data.dir);
            if (data.dir === dirName) {
                console.log('  found dir', data.dir);
                dirToList = data;
            } else {
                for (var i in data.files) {
                    if (typeof data.files[i] === 'object') {
                        findDir(data.files[i], dirName);
                    }
                }
            }
            return dirToList;
        }

        if (dirName) {
        	 	var foundDir = findDir(data, dirName);
        		console.log('found Dir', foundDir.dir);
        		res  = loop(foundDir);
        		console.log('found files:', res);
            return res;
        }
        
        res  = loop(data);
        console.log('found files:', res);
        return res;
    },

    permute: function(arr) {

    	// function loop (arr, acc) {
    	// 	for (i in arr){

    	// 	}
    	// }

    	// var len = arr.length;
    	// var fixed = arr[0];
    	// for (var i = fixed; i <= 4; i++) {
    	// 	loop([i]
    	// };

    },

    fibonacci: function(n) {
    	if (n ===0 ) return 0;
    	if (n < 3) return 1;
    	return this.fibonacci(n-2) + this.fibonacci(n-1);

    	// function fib (n, n1, n2) {
	    // 	if (n ===0 ) return 0;
	    // 	if (n < 3) return 1;
	    // 	return 3 + (n-1, )
    	// }

    },

    validParentheses: function(n) {
    	if (n === 1) return '()';
    	if (n === 2) return '()' + this.validParentheses(1) + '('+this.validParentheses(1) + ')';
    	if (n === 3) return '()' + this.validParentheses(2) + '(' + this.validParentheses(2) + ')';
    }
};
