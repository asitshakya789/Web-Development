function pattern(num) {
    for (let i = 1; i <= num; i++) {
      let str = "";
      // Print leading spaces
      for (let j = 1; j <= num - i; j++) {
        str += " ";
      }
      // Print sequence of numbers
      let counter = 1;
      for (let k = 1; k <= i; k++) {
        str += counter;
        counter++;
      }
     let counter2 = i-1 ;
      for (let k = 1; k <= i-1; k++) {
        str += counter2;
        counter2--;
      }
      console.log(str);
    }
}

pattern(5);


//     1
//    121
//   12321
//  1234321
// 123454321

