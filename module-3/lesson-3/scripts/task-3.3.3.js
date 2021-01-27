function calculator(number1, number2, operator) {
    switch(operator) {
        case '+':
            result = number1 + number2;
            console.log(number1 + " + " + number2 + " = " + result);
            break;
         case '-':
            result = number1 - number2;
            console.log(number1 + " - " + number2 + " = " + result);
            break;
        case '*':
            result = number1 * number2;
            console.log(number1 + " * " + number2 + " = " + result);
            break;
        case '/':
            result = number1 / number2;
            console.log(number1 + " / " + number2 + " = " + result);
            break;
        default: 
        console.log("error");
        break;            
    }
}

calculator(8, 4, '/');
calculator(5, 6, '+');
calculator(20, 7, '-');
calculator(6, 6, '*');