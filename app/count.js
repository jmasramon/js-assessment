exports = (typeof window === 'undefined') ? global : window;



exports.countAnswers = {
    // count: function(start, end) {
    //     console.info('entering count');
    //     var intervalID;

    //     function myCallback() {
    //         console.info('myCallback.counter:', myCallback.counter);
    //         console.log(myCallback.counter);
    //         myCallback.counter++;
    //         if (myCallback.counter > end) {
    //             console.info('reached the end');
    //             clearInterval(intervalID);
    //         }
    //     }
    //     myCallback.counter = start;

    //     intervalID = window.setInterval(myCallback, 100);
    //     console.info('intervalID:', intervalID);

    //     return {
    //         cancel: function() {
    //             clearInterval(intervalID);
    //         }
    //     };
    // }

    count: function(start, end) {
        var timeout;

        function doIt() {
            console.log(start++);

            if (start <= end) {
                timeout = setTimeout(doIt, 100);
            }
        }

        doIt();

        return {
            cancel: function() {
                timeout && clearTimeout(timeout);
            }
        };
    }
};
