{
    // function with Generic
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('bangladesh');
    type Obj = {
        name: string;
        batch: number;
    }
    const resGenericObject = createArrayWithGeneric<Obj>({
        name: 'Ashraful',
        batch: 221
    })
    // console.log(res1, resGeneric, resGenericObject);

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    const res2 = createArrayWithTuple('Bangladesh', 'Dhaka');
    const resGenericTuple = createArrayWithTuple<string, Obj>('bangladesh', {
        name: 'Ashraful',
        batch: 221
    });
    type user = {
        name: string;
        batch: number;
    }
    const resGenericObjectTuple = createArrayWithTuple<Obj, Obj>(
        {
            name: 'Ashraful',
            batch: 221
        },
        {
            name: 'XYZ',
            batch: 222
        },
    )
    // console.log(resGenericTuple);

    const addCourseToStudent = <T> (student : T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }
    interface Courses{
        name: string;
        email: string;
        devType: string;
        haveWatched?: boolean
    }
    const student1 = addCourseToStudent<Courses>({
        name: 'Mr. X',
        email: 'x@g.com',
        devType: 'Next Level'
    });
    const student2 = addCourseToStudent<Courses>({
        name: 'Mr. Y',
        email: 'Y@g.com',
        devType: 'Next Level',
        haveWatched: true
    })
    console.log([student1, student2]);
}