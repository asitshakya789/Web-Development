function sumdigit(num){
    let sum = 0 ;
    while(num>0){
        sum = sum +num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumdigit(123)); // 6