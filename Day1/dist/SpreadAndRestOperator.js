"use strict";
{ // Spread Operator and Rest Operator
    const brother1 = ["Arman", "Apon"];
    const brother2 = ["Rifat", "Arafat"];
    // brother1.push(...brother2)
    const allBrother = [...brother1, ...brother2];
    const semester1 = {
        algorithm: "Faiz Al Faisal",
        microprocessor: "Jarin Tasnim Tonvi",
    };
    const semester2 = {
        software: "Shihab",
        digitalLogic: "Ehsan",
    };
    const teacherList = Object.assign(Object.assign({}, semester1), semester2);
    // rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Ashraful', 'Samin', 'Farhan');
}
