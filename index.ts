#! /usr/bin/env node
import inquirer from "inquirer"
const answer = await inquirer.prompt([
{
message : "Enter your firstnumber",
type:"number",
name:"firstname",
},
{message : "Enter your secondnumber",
type:"number",
name:"secondname",
},
{
    message:"select one of the operator to perform operation",
    type : "list",
    name :"operator",
    choices : ["addition","subtraction","multiplication","division","modulous"]
},
]);

if(answer.operator === "addition"){
    console.log(answer.firstname+answer.secondname);
}else if(answer.operator ==="subtraction"){
    console.log(answer.firstname-answer.secondname);
}else if(answer.operator ==="multiplication"){
    console.log(answer.firstname*answer.secondname);
}else if(answer.operator ==="division"){
    console.log(answer.firstname/answer.secondname);}
else if(answer.operator==="modulous"){
    console.log(answer.firstname%answer.secondname);
}
else{console.log("select a valid operator")};
