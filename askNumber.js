
var readline = require('readline');

const rl = readline.createInterface(
    process.stdin, process.stdout);

function sum(inp = 0) {
    rl.setPrompt(`Type a number: `);
    rl.prompt();
    rl.on('line', (num) => {
        if (num === 'stop') {
             console.log("Sum is", inp);
            rl.close();
            // return inp;
        } else {
            sum(inp += parseInt(num));
        }
    });
}

sum();

//---------------

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question('Please type a number: ', async (number) => {
//     await getNumber(number);
//     readline.close();
// });

// async function getNumber(answer) {
//     console.log("passed num is", answer);
//     if (answer === 'stop') {
//         return 0;
//     } else {
//         const myNum = await readline.question('What do you think of Node.js? ');
//         answer = + await getNumber(myNum);
//         console.log("Sum is ", answer);
//         readline.close();
//     }
// }
//----------------

// function getNumber(sum) {
//     readline.question('Please type a number: ', number => {

//         readline.close();
//     });
//     return sum;
// }

// console.log(getNumber());