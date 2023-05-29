import { useState } from "react";
import { UserContext } from "./UserContext"



export const UserProvider = ({ children }) => {
    const [userLogin, setUserLogin] = useState();
    return (<UserContext.Provider value={{userLogin, setUserLogin}}>
        {children}
    </UserContext.Provider>)
}