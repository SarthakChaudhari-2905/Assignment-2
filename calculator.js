function calculator(num1, num2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            
            if (num2 === 0) {
                return "Error: Cannot divide by zero.";
            }
            result = num1 / num2;
            break;
        default:
            return `Error: Invalid operation '${operation}'. Please use '+', '-', '*', or '/'.`;
    }

    return result;
}

console.log("\n--- 2. Calculator Function ---");
console.log(`10 + 5 = ${calculator(10, 5, '+')}`); 
console.log(`10 - 5 = ${calculator(10, 5, '-')}`); 
console.log(`10 * 5 = ${calculator(10, 5, '*')}`); 
console.log(`10 / 5 = ${calculator(10, 5, '/')}`);
console.log(`10 / 0 = ${calculator(10, 0, '/')}`); 
console.log(`10 ^ 5 = ${calculator(10, 5, '^')}`); 