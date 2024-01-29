{
    // oop- class

    // create class
    class Animal{
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string){
            this.name = name;
            this.species = species;
            this.sound = sound
        }
        makeSound () {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    // create object
    const cat = new Animal("Mini Cat", "Cat", "meo meo");
    const dog = new Animal("Jack", "dog", "ghew ghew");
    dog.makeSound()
    cat.makeSound()

    /* -------------------------------------------------------- */
    
    // parameter properties 
    class Animal2{
        constructor(public name: string, public species: string, public sound: string){}
        makeSound () {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    // create object
    const cat2 = new Animal2("Mini Cat", "Cat", "meo meo2");
    const dog2 = new Animal2("Jack", "dog", "ghew ghew2");
    dog2.makeSound()
    cat2.makeSound()
}