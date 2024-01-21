"use strict";
{
    // Nullable Types
    const searchName = (value) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('Nothing to search');
        }
    };
    searchName(null);
    // Unknown types
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [v, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(v) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('Wrong Input');
        }
    };
    getSpeedInMeterPerSecond(null);
    // Never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('Uff error peye gelam');
}
