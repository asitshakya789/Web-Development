function pattern(num){
    for(let i = 1 ;i <=num;i++){
        let str  ="";
        for(let j =1 ;j<=num;j++){
            str = str +"*"; 
        }
        console.log(str); // use process.stdout.write and add a newline character
    }
}
let n = 5 ;
pattern(n);


// *****
// *****
// *****
// *****
// *****