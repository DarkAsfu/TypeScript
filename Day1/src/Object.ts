//  Reference Type --> Object

const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: "Md.",
    middleName: "Ashraful",
    lastName: "Islam"
}

const user2: {
    university: 'Green University of Bangladesh'; // literal types -> for fixed value
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isMarried: boolean;
} = {
    university: "Green University of Bangladesh",
    firstName: "Mardia",
    lastName: "Akter",
    isMarried: false
}

console.log([user, user2]);