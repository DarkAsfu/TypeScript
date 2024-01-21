{
    // Two types of Function
    // 1. Normal Function
    // 2. Arrow Function

    function sum(num1: number, num2: number): number {
        return num1 + num2;
    }
    sum(10, 20);

    const sumArrow = (num1: number, num2: number = 10): number => {
        return num1 + num2;
    }
    const result = sumArrow(10, 20);
    console.log(result);

    // Object -> Function -> Method

    const poorUser: {
        name: string;
        balance: number;
        addBalance(balance: number): string;
    } = {
        name: 'Ashraful',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`
        }
    }

    const output = poorUser.addBalance(200);
    console.log(output);

    const arr: number[] = [1, 2, 4, 5];
    const newArr: number[] = arr.map((e: number): number => e * e);
    console.log(newArr);
}