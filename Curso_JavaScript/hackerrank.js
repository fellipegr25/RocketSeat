function stringCount(someString) {
  return someString.length;
}

console.log(stringCount('Hackerrank'));

var myNumber = 4;
var myString = String(myNumber);

console.log(myNumber + " is a " + typeof myNumber);
console.log(myString + " is a " + typeof myString);

function characterPosition(someString) {
  return someString;
}

var s = "HackerRank";
var i = 6;
console.log(s.charAt(i));

var s = "Hacker";
var space = " ";
var t = "Rank";
var u = s.concat(space).concat(t);
console.log(s + " " + t);
console.log(u);

var s = "HackerRanck";
console.log(s.includes() + " " + s.includes(""));
console.log(s.includes("hack") + " " + s.includes("Hack"));

var s = "HackerRank";
console.log(s.endsWith() + " " + s.endsWith(""));
console.log(s.endsWith("rank") + " " + s.endsWith("Rank")); 

var s = "1234";
var a = s.split("");
var r = a.reverse();
var j = r.join("");
console.log(j);

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch(e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}
reverseString("1234");