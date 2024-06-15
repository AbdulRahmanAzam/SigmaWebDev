// 6! = 1 x 2 x 3 x 4 x 5 x 6

let no = prompt("Enter a number to calculate Factorial");

let factorial = 1;
for(let i = 1; i <= no; i++)
    factorial *= (i);

alert(factorial);