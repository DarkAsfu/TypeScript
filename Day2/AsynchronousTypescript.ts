{
    // Asynchronous Typescript promise

    // simulate

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }
    const getTodo = async(): Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data;
        // console.log(data);
    }

    interface Something{
        something: string
    }
    const createPromise = (): Promise<Something> =>{
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {something: "Something"}
            data ? resolve(data) : reject('failed to load data')
        })
    }

    // calling createPromise Function

    const showData =async (): Promise<Something>=> {
        const data: Something = await createPromise() ;
        return data;   
    }
    const r = showData()
    // console.log(r);
    getTodo()
}