console.log("code running");
let x= 10 ;
y = 0 ;

let waiting = new Promise((resolve, reject) => {
    setTimeout(() => {
        y = x + 5;
        resolve();
    }, 2000);
})

waiting.then(() => {
    console.log("after waiting 2 seconds", y);
})