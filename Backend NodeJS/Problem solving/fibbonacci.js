function fibonacci(num){
    if(num==0){
        console.log(0);
    }else if(num==1){
        console.log(0);
        console.log(1);
    }else{
        console.log(0);
        console.log(1);
        let a = 0;
        let b = 1;
        let sum = 0;
        for(let i = 2 ; i<=num ; i++){
            sum = a + b;
            console.log(sum);
            a = b;
            b = sum;
        }
    }
}

console.log(fibonacci(10)); // Output: 55