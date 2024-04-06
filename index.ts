#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const Currency: any = {
    USD :1, //base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280
}

let answer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "EUR", "GBP", "INR" ,"PKR"]
    },
    {
        name: "To",
        type: "list",
        message: "Enter To Currency",
        choices: ["USD", "EUR", "GBP", "INR" ,"PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = Currency[answer.From]
let toAmount = Currency[answer.To]
let amount = answer.amount

if( isNaN(amount)|| amount <= 0){
console.log(chalk.inverse("Please enter a valid positive numbers for amount!"));
}
let baseAmount = amount/fromAmount
let convertAmount = baseAmount * toAmount;

console.log(chalk.magenta`Entered Amount ${amount}`);
console.log(chalk.yellow`From Currency ${fromAmount}`);
console.log(chalk.green`Converted Amount ${convertAmount.toFixed(2)}`);
console.log(chalk.blue`To Currency ${toAmount}`);

 

