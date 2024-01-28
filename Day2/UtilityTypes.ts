{
    // Utility Types
    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>
    const person1: PersonReadonly= {
        name: "x",
        age: 1,
        contactNo: 'jsb'
    }
    // person1.name = "y"

    // Record

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }
    type MyObj = Record<string, string>
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }

    const EmptyObj: Record<string, unknown> = {}

}