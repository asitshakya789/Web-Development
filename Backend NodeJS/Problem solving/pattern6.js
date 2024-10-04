function printpattern(nums){
    for(let i =nums ;i>=1 ;i--){
        let str = '';
        for(let j =1; j<=i ;j++){
            str = str +"*";
        }
        console.log(str);
    }
}
printpattern(5);


// *****
// ****
// ***
// **
// *
