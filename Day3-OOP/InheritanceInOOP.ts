{
    // Inheritance in oop  parent -> child
    /* ---------------Without Inheritance------------------ */
    // class Student{
    //     name: string;
    //     age: number;
    //     address: string;

    //     constructor(name: string, age: number, address: string){
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //     }
    //     getStudy(numberOfHour: number) {
    //         console.log(`${this.name} will study ${numberOfHour}`);   
    //     }
    // }
    // const student1 = new Student('Ashraful', 22, 'Dhaka')

    // class Teacher{
    //     name: string;
    //     age: number;
    //     address: string;
    //     designation: string

    //     constructor(name: string, age: number, address: string, designation: string){
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //         this.designation = designation
    //     }
    //     getStudy(numberOfHour: number) {
    //         console.log(`${this.name} will study ${numberOfHour}`);   
    //     }
    //     takeClass(numberOfClass: Number) {
    //         console.log(`${this.name} will take ${numberOfClass} class`);
    //     }
    // }

    // const teacher1 = new Teacher('Maisha', 32, 'Dhaka', 'Leturer')

    /* ---------------------use Inheritance--------------------------- */
    class Person{
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getStudy(numberOfHour: number) {
            console.log(`${this.name} will study ${numberOfHour}`);   
        }
    }

    class Student extends Person{
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
    }
    const student1 = new Student('Ashraful', 22, 'Dhaka')

    class Teacher extends Person{
        designation: string
        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation
        }
        takeClass(numberOfClass: Number) {
            console.log(`${this.name} will take ${numberOfClass} class`);
        }
    }

    const teacher1 = new Teacher('Maisha', 32, 'Dhaka', 'Leturer')
    
}