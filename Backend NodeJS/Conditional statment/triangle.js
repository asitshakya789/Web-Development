// // we all know about  tringle  but htis  ttime  lets;s do something  interesting 
//  given  3 integer  abc check  if  we  can  form  a tringle  with size  of  
// the  tringle  having  length  a , b  c 

var a =4 ;
 var b =3 ;
 var c =5 ;
 if(a>=4 && b>=3){
    if(c>=5){
        console.log("we can form a tringle");
    }else {
        console.log("we can not form a tringle");
    }
 }else{
    console.log("we can't form a tringle");
 }
 if(a+b>=c && a+c>=b && b+c >=a){
    console.log("we can form a tringle");

 } else {
    console.log("we can't form a tringle");
 }