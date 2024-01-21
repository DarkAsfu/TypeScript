{
    // Type elias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "Ashraful",
        age: 22,
        gender: "Male",
        contactNo: "01777112564",
        address: "Dhaka"
    }

    const student2: Student = {
        name: "Mahady",
        age: 21,
        gender: "Male",
        address: "Nikunjo, Dhaka"
    }
    const student3: Student = {
        name: "Arman",
        age: 18,
        gender: "Male",
        address: "Cumilla"
    }

    // creating another type alias
    type UserName = string;
    const user: UserName = "Ashraful";
    type Number = number;
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => {
        return num1 + num2
    }
}