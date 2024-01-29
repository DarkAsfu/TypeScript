{
    // Polymorphism
    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hourse per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hourse per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hourse per day`);
        }
    }
    const getSleepingHour = (params: Person) => {
        params.getSleep()
    }
    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepingHour(person1)
    getSleepingHour(person2)
    getSleepingHour(person3)


    class Shape {
        getArea(): number {
            return 0;
        }
    }
    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const getShapeArea = (param: Shape) =>{
        return param.getArea()
    }
    const rectangle = new Rectangle(4, 5);
    const circle = new Circle(5);

    console.log(getShapeArea(rectangle));
}