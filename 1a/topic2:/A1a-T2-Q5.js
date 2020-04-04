// Define and initialise variables
let income = 60000;

// TODO: Define and initialise variable "taxBracket"
let taxBracket = "";

// TODO: Define and initialise variable "taxDue"
let taxDue = 0;

// TODO: Write an if-else if structure to determine the tax bracket based on the income.
//       For each code block, you should set the string value of taxBracket, and
//       Calculate the tax due for the income given.
if (income >= 0 && income <= 18200)
{
	taxBracket = "Nil";
	taxDue = 0;
}
else if (income >= 18201 && income <=37000)
{
   taxBracket = "19c for each dollar over $18,200";
	taxDue = (income - 18200) * 0.19;
}
else if (income >= 37001 && income <= 90000)
{
    taxBracket = "$3572 plus 32.5c for each dollar over $37000";
	taxDue = ((income - 37000) * 0.325) + 3572;
}

else if (income >= 90001 && income <= 180000)
{
	 taxBracket = "$20797 plus 37c for each dollar over $90000";
	 taxDue = ((income - 90000)*0.37) + 20797;
}
else if (income >= 180001)
{
	 taxBracket = "$54097 plus 45c for each dollar over $180000";
	 taxDue = ((income - 180000)*0.45) + 54097;
}

console.log("Based on an annual income of $" + income);
console.log("Your taxBracket is:" + " " + taxBracket);
console.log("From this the calculated taxDue is:" + " " + "$" +taxDue.toFixed(2));
