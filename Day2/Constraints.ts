{
    // constrainrs in typeScript
    interface Courses{
        id: number;
        name: string;
        email: string;
    }

    const addCourseToStudent = <T extends Courses> (student : T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }
    
    const student1 = addCourseToStudent({
        id: 403,
        name: 'Mr. X',
        email: 'x@g.com',
        devType: 'Next Level'
    });
    const student2 = addCourseToStudent({
        id: 404,
        name: 'Mr. Y',
        email: 'y@g.com',
    })
    const student3 = addCourseToStudent({
        id: 405,
        name: 'Mr. Z',
        email: 'z@g.com',
    });
}