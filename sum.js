const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin, output: process.stdout
})

interface.question("Enter your no1:", (num1) => {
    interface.question("Enter your no2:", (num2) => {
        console.log(num1+num2)
    })
})