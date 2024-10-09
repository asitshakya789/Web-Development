console.log("Starting");
for(let i =0 ; i<= 3;i++){
    setTimeout(() => {
        console.log('timer done')
        setTimeout(() => {
            console.log("wooh another one ")
        }, 10);
    }, 10);
}

for(let i =0 ;i <=100000000 ; i++){

}
console.log("End");
