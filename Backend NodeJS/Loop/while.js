/* 
What is the difference between while and if?

if will only check the condition once, doesn't matter if the condition is true or false, it will only check it once.
For a while loop, it will check the condition again and again in time until it becomes false.

*/

let i = 1;
while (i <= 10) {
  console.log(i);
  i += 1;
}
// While loop will run 10 times and print numbers from 1 to 10.

console.log("End of the program");