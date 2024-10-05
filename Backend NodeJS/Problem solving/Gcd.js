function gcd(a ,b ){
    let ans =1  ; 
    for(let i  =2 ; i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
            ans =i ;
        }
    }
    return ans ;
    
}

function lcm(a ,b){
    return (a*b) / gcd(a,b) ;
}

let num1 = 12 ;
 let num2 = 18 ;
 console.log("gcd : " , gcd(num1,num2));
 console.log("lcm : " , lcm(num1,num2));