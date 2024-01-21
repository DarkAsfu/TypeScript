"use strict";
// Two types of Function
// 1. Normal Function
// 2. Arrow Function
function sum(num1, num2) {
    return num1 + num2;
}
sum(10, 20);
const sumArrow = (num1, num2 = 10) => {
    return num1 + num2;
};
const result = sumArrow(10, 20);
console.log(result);
// Object -> Function -> Method
const poorUser = {
    name: 'Ashraful',
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
const output = poorUser.addBalance(200);
console.log(output);
const arr = [1, 2, 4, 5];
const newArr = arr.map((e) => e * e);
console.log(newArr);
