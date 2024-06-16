// 6! = 1 x 2 x 3 x 4 x 5 x 6

// let no = prompt("Enter a number to calculate Factorial");

// Approach 1
// let factorial = 1;
// for(let i = 1; i <= no; i++)
//     factorial *= (i);

// alert(factorial);

// Approach 2
let no = 6;
function factorial(no){
    let arr = Array.from(Array(no + 1).keys());
    console.log(arr.slice(1, 2));
    let c = arr.slice(3).reduce((a, b) => {
        return a*b;
    })
    return c
}

console.log(factorial(no));