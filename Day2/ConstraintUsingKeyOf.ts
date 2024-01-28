{
    //  generic constraints with keyof operator

    type vehicle = {
        bike: string;
        car: string;
        plane: string
    }

    type  Owner = "bike" | "car" | "plane" // manually
    type Owner2 = keyof vehicle;
    const person1: Owner = "bike";
    // console.log(person1);

    const user = {
        name: "Mr. X",
        age: 22,
        address: "Cumilla"
    }

    const car = {
        model: "Roles Royels",
        edition: 2024
    }
    // user['name'] or user.name

    const getPropertyValue =<X, Y extends keyof X> (obj: X, key : Y) =>{
        return obj[key]
    }
    const result = getPropertyValue(car, 'edition');
    console.log(result);

}