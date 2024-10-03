// Given the side lengths of a triangle in the form of 3 numbers
// Check if the given triangle is equilateral, scalene, or isosceles

// a = 5, b = 5, c = 5: equilateral
// a = 8, b = 12, c = 5: scalene
// a = 5, b = 14, c = 8: isosceles

// Equilateral: all sides are equal to each other
// Scalene: none of the sides are equal to each other
// Isosceles: any 2 sides are equal to each other, but the third one is different

var a = 5;
var b = 6;
var c = 5;

if (a === b && b === c && c === a) {
  console.log("this is equilateral triangle");
} else if (a === b || b === c || c === a) {
  console.log("this is isosceles triangle");
} else {
  console.log("this is scalene triangle");
}