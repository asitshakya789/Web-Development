function equation(a,b,c){

    let root  = Math.sqrt(b*b)+(4*a*c);

    if(root < 0 ){
        console.log("The equation has no real roots");
    }else{
        let x1 = (-b +root)/2;
        let x2 = (-b -root)/2;
        console.log("The roots are: ", x1, x2);


    }
}

equation(1, -10, 25); // output: The roots are:  5 5.000000000000001