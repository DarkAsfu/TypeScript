{
    // Union types |
    type FrontDeveloper = 'Fakibaz Dev' | 'Junior Dev'
    type MERNDeveloper = 'Frontend Dev' | 'Expert MERN Dev'
    type Developer = FrontDeveloper | MERNDeveloper
    const newDeveloper: Developer = "Fakibaz Dev"

    type User = {
        name: string;
        age: number;
        gender: 'Male' | 'Female';
        bloodGroup?: 'O+' | 'O-' | 'A+' | 'A-' | 'AB+' | 'AB-' | 'B+' | 'B-'
        address?: string;
    }

    const student1: User = {
        name: "Asha Islam",
        age: 22,
        gender: 'Female',
        address: 'Cumilla',
        bloodGroup: 'AB+',

    }
    const student2: User = {
        name: "Ashraful",
        age: 22,
        gender: 'Male',
        address: "Dhaka",
        bloodGroup: "A+"
    }
    console.log([student1, student2]);

    //  Intersection

    type FrontEndWebDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: "MERN Stack Developer";
    }
    type FullStackDeveloper = FrontEndWebDeveloper & BackendDeveloper 
    const fullStackDeveloper : FullStackDeveloper ={
        skills: ["HTML", "CSS", "NodeJS", "ReactJS"],
        designation1: "Frontend Developer",
        designation2: "MERN Stack Developer"
    }
}
