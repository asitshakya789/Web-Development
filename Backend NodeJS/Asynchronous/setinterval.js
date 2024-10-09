let x = setInterval(() => {
    console.log("another one")
},500 );
let y = setInterval(() => {
    console.log("hey again")
},1000 );
clearInterval(y);