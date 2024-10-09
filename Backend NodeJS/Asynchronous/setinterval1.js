let count = 0 ;
let y = setInterval(() => {
    count++;
    console.log(count);
    if(count>15){
        clearInterval(y);
    }
},2000);