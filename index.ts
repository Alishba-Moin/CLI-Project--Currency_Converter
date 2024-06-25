#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.yellowBright(`\n   <<<====================================>>>`));
console.log(chalk.bold.redBright(`<<<=======>>>  ${chalk.redBright.bold('CURRENCY CONVERTER')}  <<<=======>>>`));
console.log(chalk.bold.yellowBright(`   <<<====================================>>>\n`));

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
        message: chalk.italic.bold("Enter your amount")
    }
]);
let fromAmount = Currency[answer.From]
let toAmount = Currency[answer.To]
let amount = answer.amount

if( isNaN(amount)|| amount <= 0){
console.log(chalk.inverse.italic("Please enter a valid positive numbers for amount!"));
}
let baseAmount = amount/fromAmount
let convertAmount = baseAmount * toAmount;

console.log(chalk.magentaBright.bold(`Entered Amount ${chalk.underline(amount)}`));
console.log(chalk.yellowBright.bold(`From Currency ${chalk.underline(fromAmount)}`));
console.log(chalk.greenBright.bold(`Converted Amount ${chalk.underline(convertAmount.toFixed(2))}`));
console.log(chalk.blueBright.bold(`To Currency ${chalk.underline(toAmount)}`));

 

