{   // Spread Operator and Rest Operator
    const brother1: string[] = ["Arman", "Apon"];
    const brother2: string[] = ["Rifat", "Arafat"];
    // brother1.push(...brother2)
    const allBrother: string[] = [...brother1, ...brother2];

    const semester1: {
        algorithm: string;
        microprocessor: string;
    } = {
        algorithm: "Faiz Al Faisal",
        microprocessor: "Jarin Tasnim Tonvi",
    }
    const semester2: {
        software: string;
        digitalLogic: string;
    } = {
        software: "Shihab",
        digitalLogic: "Ehsan",
    }
    const teacherList = {
        ...semester1,
        ...semester2
    }

    // rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }
    greetFriends('Ashraful', 'Samin', 'Farhan');
}