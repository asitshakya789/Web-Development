function pattern(nums){
    for(let i= 1 ;i<=nums ;i++){
        let count = "";
        for(let  j =1 ;j<=i ;j++){
            count = count+"*";
        }
        console.log(count);
    }
}
pattern(5);


// *
// **
// ***
// ****
// *****

