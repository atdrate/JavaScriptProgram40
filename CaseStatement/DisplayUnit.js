readline = require("readline-sync")
let digit =readline.question("enter the number ")
console.log("Enter the digit is: " + digit);

switch (digit) {
    case "1":
        console.log("Unit");
      break;
    case "10":
        console.log("Ten");
      break;
    case "100":
        console.log("Hundred");
      break;
    case "1000":
        console.log("Thousand");
      break;
    case "10,000":
        console.log("Ten Thousand");
      break;
    case "100,000":
        console.log("Hundred Thousand");
      break;
    case "1,000,000":
        console.log("Million");
        break;
    case "10,000,000":
        console.log("Ten Million");
        break;
    case "100,000,000":
        console.log("Hundred Million");
        break;
    case "1,000,000,000":
        console.log("Billion");
        break;
    case "10,000,000,000":
        console.log("Ten Billion");
        break;
    case "100,000,000,000":
        console.log("Hundred Billion");
        break;
    case "1,000,000,000,000":
        console.log("Trillion");
        break;
    default:
        console.log("Invalid Option");
      break;
  }