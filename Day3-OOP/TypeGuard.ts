{
    // Type Guard
    // typeof --> type guard

    type Alphanumeric = string | number
    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const res = add(14, 4);
    console.log(res);

    // in guard

    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: "Admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }
    const normalUser: NormalUser = {
        name: 'Mr. Korim'
    }
    const adminUser: AdminUser = {
        name: 'Mr. Rohim',
        role: 'Admin'
    }
    getUser(normalUser)
    getUser(adminUser)
}