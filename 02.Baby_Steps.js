/*  
	Write a program that accepts one or more numbers as command-line arguments  
	and prints the sum of those numbers to the console (stdout).  
*/

const arg = process.argv.slice(2);
console.log(arg.reduce((x,y)=>Number(x)+Number(y)));

