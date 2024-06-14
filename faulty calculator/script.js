console.log("Faulty Calculator");

// + --> -
// * --> +
// - --> /
// / --> **

// First method
// do{
//     let a = prompt("Enter first number");
//     let b = prompt("Enter second Number");

//     let operator = prompt("Enter the operator '+', '-', '*', '/' or 'no");
//     if(operator == "no")
//         break;

//     let rand = Math.random() % 100 + 1;
//     if(rand <= 10){
//         if(operator == '+'){
//             console.log("The result is " + (a - b));
//         }else if(operator == '*'){
//             console.log("The result is " + (a + b));
//         }else if(operator == '-'){
//             console.log("The result is " + (a/b));
//         }else if(operator == '/'){
//             console.log("The result is " + (a**b));
//         }
//     }else{
//         if(operator == '+'){
//             console.log("The result is " + (a + b));
//         }else if(operator == '*'){
//             console.log("The result is " + (a * b));
//         }else if(operator == '-'){
//             console.log("The result is " + (a-b));
//         }else if(operator == '/'){
//             console.log("The result is " + (a/b));
//         }
//     }

// }while(1);


// + --> -
// * --> +
// - --> /
// / --> **

// second MEthod
do {
    let a = prompt("Enter first number");
    let b = prompt("Enter second number");
    let c = prompt("Enter operation +,-,*,/ or no");

    if (c == "no")
        break;

    let obj = {
        "+": "-",
        "-": "/",
        "*": "+",
        "/": "**"
    }

    let random = Math.random();
    console.log(random);
    if (random <= 0.1) {
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    } else {
        c = obj[c];
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    }
} while (1);










