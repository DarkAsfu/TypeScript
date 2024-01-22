{
    // Generic with interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X
    }
    interface EmilabWatch {
        brand: string;
        model: string;
        display?: string;
    }
    interface AppleWatch extends EmilabWatch {
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    interface Bike {
        model: string;
        version: string;
    }
    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Ashraful",
        computer: {
            brand: "Lenovo",
            model: "ideapad Slim 3",
            releaseYear: 2020,
        },
        smartWatch: {
            brand: "Emilab",
            model: "xyz",
            display: "OLED"
        },
    }

    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: "Rich Rev",
        computer: {
            brand: "MacBook",
            model: "14",
            releaseYear: 2022,
        },
        smartWatch: {
            brand: "Apple",
            model: "sj2",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "R15",
            version: "V4"
        },
    }
    console.log([poorDeveloper, richDeveloper]);
}   
