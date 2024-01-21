"use strict";
{ // Obeject Destructuring
    const user = {
        id: 403,
        name: {
            firstName: "Md.",
            middleName: "Ashraful",
            lastName: "Islam",
        },
        contactNo: "01720898323",
        address: "Dhaka"
    };
    const { id, name: { firstName, middleName: surName, lastName }, contactNo, address } = user;
    console.log(firstName, surName, lastName, "Contact No: ", contactNo);
    // Array Destructutring
    const myCourse = ["Software Engineering", "Database System", "Operating System", "Web Programming"];
    const [favouriteCourse, , ...rest] = myCourse;
    console.log(favouriteCourse, ...rest);
}
