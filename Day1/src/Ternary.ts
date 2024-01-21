{
    // Ternary Operator
    const age: number = 150;
    const result: string = age >= 18 ? "Adult Age" : "Not Adult";
    // console.log(result);

    // Nullish Coalescing Operator (decision making depend on Null and Undefined)
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    // console.log({result1}, {result2});

    // Optional Chaining
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAdress?: string;
        };

    }

    const user: User = {
        name: "Ashraful",
        address: {
            city: 'Dhaka',
            road: '28/j',
            presentAddress: 'Dhaka',
            // permanentAdress: 'Cumilla'
        }
    }

    const permanentAdress = user?.address?.permanentAdress ?? 'No home';
    console.log(permanentAdress);
}