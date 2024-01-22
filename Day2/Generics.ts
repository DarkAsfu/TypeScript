{
    // Generics type
    type GenericArray<T> = Array<T>
    // const rollNumbers : number[] = [4, 8, 6];
    const rollNumbers: GenericArray<number> = [4, 8, 6];
    // const mentors: string[] = ["c", "r", "j"];
    const mentors: GenericArray<string> = ["c", "r", "j"];
    // const boolArray: boolean[] = [true, false, false]; 
    const boolArray: GenericArray<boolean> = [true, false, false];

    const user : GenericArray<{
        name: string,
        age: number,
    }> = [
        {
            name: "Ashraful",
            age: 21,
        },
        {
            name: "Mardia",
            age: 21,
        }
    ]


    // generic tuple
    type GenericTuple<X, Y> = [X, Y];
    const men : GenericTuple<string, string> = ['Mr. X', 'Ms. Y'];
    const UserWithId: GenericTuple<number, {
        name: string,
        email: string
    }> = [1245, {name: 'Ashraf', email: 'ashraful.islam0871@gmail.com'}]
}