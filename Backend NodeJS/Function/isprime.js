function prime(number){
    if(number <= 1){
        return false;
    }else{
        for(let i= 2 ;i< number;i++){
            if(number %2 == 0 ){
                return true 
            }else{
                return false
            }
        }
    }
}
let n =11 ;
console.log(prime(n));