function sumOfProductOfDigits(n1, n2) {
    let s1 = String(n1);
    let s2 = String(n2);

    const maxLength = Math.max(s1.length, s2.length);

    s1 = s1.padStart(maxLength, '0');
    s2 = s2.padStart(maxLength, '0');

    let totalSum = 0;

    for (let i = 0; i < maxLength; i++) {
        const digit1 = parseInt(s1[i]);
        const digit2 = parseInt(s2[i]);
        totalSum += (digit1 * digit2);
    }

    return totalSum;
}

console.log("\n--- 4. Sum of Product of Digits ---");
console.log(`n1=6, n2=34 -> Sum: ${sumOfProductOfDigits(6, 34)}`);
console.log(`n1=123, n2=456 -> Sum: ${sumOfProductOfDigits(123, 456)}`);
console.log(`n1=98, n2=1234 -> Sum: ${sumOfProductOfDigits(98, 1234)}`);
console.log(`n1=1000, n2=1 -> Sum: ${sumOfProductOfDigits(1000, 1)}`);
console.log(`n1=10, n2=20 -> Sum: ${sumOfProductOfDigits(10, 20)}`);
