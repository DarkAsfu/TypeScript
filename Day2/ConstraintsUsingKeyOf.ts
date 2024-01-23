{
    // generic Constraints using key of
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = 'bike' | 'car' | 'ship' // manually

    type Owner2 = keyof Vehicle;

    const getPropertyValue =<X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'c',
        age: 54,
        address: 'Dhaka'
    }

    const res = getPropertyValue(user, 'name');
    console.log(res);
    // const person1 : Owner = "bike"
    // const person1 : Owner2 = ""

    /* const user = {
        name: 'c',
        age: 54,
        address: 'Dhaka'
    } */
    // user['name'] -> c
}