"use strict";
var _a, _b;
{
    // Ternary Operator
    const age = 150;
    const result = age >= 18 ? "Adult Age" : "Not Adult";
    // console.log(result);
    // Nullish Coalescing Operator (decision making depend on Null and Undefined)
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    const user = {
        name: "Ashraful",
        address: {
            city: 'Dhaka',
            road: '28/j',
            presentAddress: 'Dhaka',
            // permanentAdress: 'Cumilla'
        }
    };
    const permanentAdress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAdress) !== null && _b !== void 0 ? _b : 'No home';
    console.log(permanentAdress);
}
