function findTax(salary) {
    if (typeof salary !== 'number' || salary < 0) {
        return 0;
    }

    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0.0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            taxRate = 0.0;
            break;
    }

    const taxAmount = salary * taxRate;
    return taxAmount;
}

console.log("\n--- 3. Tax Calculation Function ---");
const salary1 = 450000;
console.log(`Salary: ${salary1.toLocaleString()}. Tax: ${findTax(salary1).toLocaleString()} (0%)`);

const salary2 = 800000;
console.log(`Salary: ${salary2.toLocaleString()}. Tax: ${findTax(salary2).toLocaleString()} (10%)`);

const salary3 = 1300000;
console.log(`Salary: ${salary3.toLocaleString()}. Tax: ${findTax(salary3).toLocaleString()} (20%)`);

const salary4 = 2000000;
console.log(`Salary: ${salary4.toLocaleString()}. Tax: ${findTax(salary4).toLocaleString()} (30%)`);
