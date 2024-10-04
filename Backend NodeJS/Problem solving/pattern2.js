function patternPrint(num) {
    for (let i = 1; i <= num; i++) {
        let str = "";
        for (let j = i; j <= num; j++) {
            str += "*" + " ";
        }
        console.log(str);
    }
}
patternPrint(5);
patternPrint(7)


// * * * * * 
// * * * * 
// * * * 
// * * 
// *