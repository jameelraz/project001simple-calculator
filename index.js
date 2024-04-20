#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        message: "Enter your firstnumber",
        type: "number",
        name: "firstname",
    },
    { message: "Enter your secondnumber",
        type: "number",
        name: "secondname",
    },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "modulous"]
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstname + answer.secondname);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstname - answer.secondname);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstname * answer.secondname);
}
else if (answer.operator === "division") {
    console.log(answer.firstname / answer.secondname);
}
else if (answer.operator === "modulous") {
    console.log(answer.firstname % answer.secondname);
}
else {
    console.log("select a valid operator");
}
;
