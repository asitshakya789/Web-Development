function patternPrint(num){
    for (let i = 1; i <= num; i++) {
        let str = "";
        let space = num - i;
        for(let j = 1; j <= space; j++){
            str += " "; // print spaces
        }
        for(let k = 1; k <= 2*i-1; k++){
            str += "*"; // print asterisks
        }
        console.log(str);
    }
}
patternPrint(5);


//     * 
//    ***
//   *****
//  *******
// *********
