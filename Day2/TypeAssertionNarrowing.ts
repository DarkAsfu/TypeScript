{
    // type assertion
    let anything: any;
    anything = "Next Level Web Development";
    anything = 222;
    // (anything as number).

    const kgToGm = (value: string | number) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        } else if (typeof value === 'number') {
            return `The converted value is: ${value * 1000}`;
        }
    }
    // const result2 = kgToGm(2) as number
    const result1 = kgToGm('2') as string

    type CustomError = {
        message: string
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }
    // console.log();
}