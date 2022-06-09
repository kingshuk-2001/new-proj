import { createContext ,useState} from "react";

const LoginContext = createContext({});


export function LoginProvider({ children}:any){

    
    //create user interface
    interface Users{
        id : number;
        username : string
        email : string
        age : string
        role : string
        password : string
    }

    //make the interface of array type
    interface Users extends Array<Users>{}

    // define userlist variable to store all users data
    const [userlist, setuserlist] = useState<Users[]>([])

    return(
        <LoginContext.Provider value={{
           userlist,
           setuserlist
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext
