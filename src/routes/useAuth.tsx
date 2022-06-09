import { useContext, useState } from "react";
import LoginContext from "../context/LoginContext";


const useLocalStorage = (key: string,
    initialValue: string) => { 

   
    
    const [data, setData] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            // Parse stored json data
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // error
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore =
                value instanceof Function ? value(data) : value;
            // Save state
            setData(valueToStore);
    

            // local storage
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // error case
            console.log(error);
        }
    };
    return [data, setValue];
}

export default useLocalStorage