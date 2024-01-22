{
    /* { Type alias -> variable, function, array
    Interface -> Object } */
    
    // Interface
    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    type UserWithRole1 = User1 & { role: string };
    const user1: UserWithRole1 = {
        name: 'Ashraful',
        age: 21,
        role: 'Manager'
    };

    const user2: UserWithRole2 = {
        name: 'Ashraful',
        age: 21,
        role: 'Manager'
    };

    // Array, function, js -> Object

    type Roll1 = number[];
    interface Roll2 {
        [index: number]: number
    }
    const rollNumber1: Roll1 = [1, 2, 4, 5];
    const rollNumber2: Roll2 = [10, 20, 40, 50];

    type Add1 = (num1: number, num2: number) => number
    interface Add2{
        (num1: number, num2: number) : number
    }
    const add: Add2 = (num1, num2) => num1 + num2

}