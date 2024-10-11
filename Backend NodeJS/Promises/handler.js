function getrandomnumber(max) {
    return Math.floor(Math.random() * max);
}

function createPromise() {
    return new Promise(function(resolve, reject) {
        console.log("entering the executor callbacks");
        setTimeout(function() {
            let num = getrandomnumber(10);
            if (num % 2 === 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 10000);
        console.log("leaving the executor callbacks");
    });
}

console.log("done");

const p = createPromise();
console.log("we are now waiting for the promise to complete");
console.log("currently, my promise object is like .... ", p);

p.then(function fulfillment(num) {
    console.log("the promise is fulfilled with the value " + num);
}, function rejectHandler(num) {
    console.log("the promise is rejected with the value " + num);
});

p.then(function fulfillment(num) {
    console.log("the promise is fulfilled again with the value " + num);
}, function rejectHandler(num) {
    console.log("the promise is rejected again with the value " + num);
});