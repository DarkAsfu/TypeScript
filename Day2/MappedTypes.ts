{
    // Mapped Types
    const arrOfNum: number[] = [2, 4, 6];
    // const arrOfStr: string[] = ['2', '4', '6'];

    const arrOfStr : string [] = arrOfNum.map(number => number.toString());
    // console.log(arrOfStr);

    type AreaNumber = {
        height: number;
        width: number;
        length: number;
    };
    type Height = AreaNumber["height"] // look up type
    // type AreaStr = {
    //     height: string;
    //     width: string;
    // };

    // type AreaStr = {
    //    [ key in keyof AreaNumber ] : string 
    // }

    type AreaStr<T> = {
       [ key in keyof T ] : T[key] ;
    }
    
    const area1: AreaStr<{height: string; width: number}> ={
        height: '100',
        width: 50
    }
}