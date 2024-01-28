{
    // conditional types -> akta type onno akta type er opor kono akta condition er opor depend kore return kore 
    // type a1 = null;
    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false // conditinal type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any// conditinal type

    type SoftwareEng = {
        bike: string;
        car: string;
        freeTime: boolean 
    }

    // type CheckVehicle<T> = T extends "bike" | "car" | "freeTime" ? true : false 
    // use keyof operator
    type CheckVehicle<T> = T extends keyof SoftwareEng ? true : false 

    type HasBike = CheckVehicle<"bike"> // return true
}