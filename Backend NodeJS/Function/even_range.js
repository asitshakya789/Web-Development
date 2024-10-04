// check which numbe are odd or even bw  1 o 50

function  evennumber( num){
    if(num %2==0){
        return "even";
    }else{
        return "False";
    }
} 
 let number =50 ;
for(let  i = 1 ;i<=number ; i++){
    console.log( i , "is" ,evennumber(i));
}