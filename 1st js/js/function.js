/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(x,y,z,n){
  console.log(" you will be a " +x+" in "+y+", and married to "+z+" with "+n+" kids.")
}
tellFortune("web dev","jordan","jorjia",5)
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(x){
let age = x*7;
console.log(" Your doggie is "+age+" years old in dog years! ");
}
calculateDogAge(5);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age,amount){
let calc=(100-age)*365*amount;
console.log(' You will need '+calc+' cups of tea to last you until the ripe old age of 100');
}
calculateSupply(21,5);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
console.log(' Hello '+name);
}
greet('Ahmad');

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x is not have a value 

function double(7) {
  return 2 * 7;
}
you cant make a variable paremeter with number in start of (should be acharacter)

function double('7') {
  return 2 * 'x';
}
you cant give a string as aparemeter variable
*/



/*
6
fix these functions:
func double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3(x) {
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(x){
  let i=x^3;
  console.log(' '+i);
}
cube(456);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x,y){
z=x*y;
console.log(' '+z);
}
multiply(48,800);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  if (age>=20){
    console.log(" yes you can")
  }
  else{
    x=20-age
    console.log(" please come back after "+x+" years to get one")
  }
}
canIGetADrivingLicense(15);
canIGetADrivingLicense(30);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(x,y){
z=x.length;
c=y.length;
if(z=c){
  console.log(' true')
}
else{
    console.log('false')
  }
}
sameLength('ahmad hashem abed ','ajjjddjddj');
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(x,y){
  if(x>=y){
    console.log(x)
  }
  else{
    console.log(' '+y)
  }
}
largerNubmer(8,90);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer (x,y,z){
  i = 0;
  if (x < y)
  {
    i= x;
  } else
  {
    i= y;
  }
  if (z < i) 
  {
    i = z;
  }
  console.log(' '+i);

}
smallerNubmer(100,20,20)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(x,y,z,a,d) {
  w=x.length;
  e=y.length
  r=z.length
  t=a.length
  u=d.length
  if (w<=e && w<=r && w<=t && w<=u)
{
    console.log(x);
}
else if (e<=w && e<=r && e<=t && e<=u)
{
    console.log(y);
}
else if (r<=w && r<=e && r<=t && r<=u)
{
    console.log(z);
}
else if (t<=w && t<=e && t<=r && t<=u)
{
    console.log(a);
}
else
{
    console.log(d);
}
}
shorterString('ahmad','ali','obada','seed','ali')
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(x,y,z,a,d) {
  w=x.length;
  e=y.length
  r=z.length
  t=a.length
  u=d.length
  i=0;
  if (w>=e && w>=r && w>=t && w>=u)
{
    console.log(x);
}
else if (e>=w && e>=r && e>=t && e>=u)
{
    console.log(y);
}
else if (r>=w && r>=e && r>=t && r>=u)
{
    console.log(z);
}
else if (t>=w && t>=e && t>=r && t>=u)
{
    console.log(a);
}
else
{
    console.log(d);
}
}
longerString('ahmad','ali','obada','seed','ali')
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x){
  z=x%2;
  if(z=0){
    console.log (' '+true);
  }
  else{
    console.log(' '+false)
  }
}
isEven(7);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(x){
  z=x%2;
  if(z=0){
    console.log (' '+false);
  }
  else{
    console.log(' '+true)
  }
}
isOdd(9);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x){
  if (x<0){
    x=x*-1
  }
  else{
    x=x
  }
  console.log(' '+x)
}
positive(-5);


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(x,y){
  console.log( ' '+x+' '+y)

}
fullName('ahmad','hashem')

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(x,y,a,s,d) {
sum=x+y+a+s+d;
avg=sum/5;
console.log(' '+ avg)
}
average(5,6,7,9,66)
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber (){
  x=  Math.random();
  console.log(' '+x)
}
randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min,max){
  x=Math.random() * (max - min) + min;
console.log(' '+x)
}
randomBetweenNumbers(2,10)
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(x){
  let i = 0;
  if(x<100||x=100&&x=95||x>95){
    i="A"}
  else if(x<94||x=95&&x=84||x>84)
    {i="B"}
 else if(x<84||x=84&&x=70||x>70)
    {i="C"}
 else if(x<69||x=69&&x=50||x>50)
    {i="D"}
 else (49>x>0){
    {i="F"}
}
console.log(' '+i)


}
scoreInUniversty(100)
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3
*/
let g = -1
function counter(){
  g++
  console.log(' '+g)
}
counter()
counter()
counter()
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
  console.log(' '+ g+' and the counter reset now')
  g=-1
}
resetCounter()
counter()
counter()
counter()
counter()
resetCounter()
counter()
