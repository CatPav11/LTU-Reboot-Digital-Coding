var billPreTip = 35.45

var tipPercentage = 15;

var tipAmount = (billPreTip * tipPercentage) / 100;

var totalBill = "Your total bill with tip is : " + "£" + (billPreTip + tipAmount) + '<br>'

console.log(totalBill);
document.write("Your total bill, with tip is £" + totalBill.toFixed(2) + ". ");
document.write("This includes a tip of " + tipPercentage);