exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        return new Promise(function(resolve, reject) {
            resolve(value);
        });
    },

    manipulateRemoteData: function(url) {
        var res = new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onreadystatechange = function(e) {
                if (xhr.readyState !== 4) {
                    return;
                }

                if ([200, 304].indexOf(xhr.status) === -1) {
                    reject(new Error('Server responded with a status of ' + xhr.status));
                } else {
                    var resp = e.target.response;
                    var result = [];
                    var people = JSON.parse(resp).people;
                    console.log('resolved to ', people);

                    for (key in people) {
                        if (people.hasOwnProperty(key)) {
                            result.push(people[key].name);
                        }
                    }
                    result.sort();
                    resolve(result);
                }
            };

            xhr.send();
        });
        return res;
    }
};
