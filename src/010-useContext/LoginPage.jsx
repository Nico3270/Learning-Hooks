import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const {userLogin, setUserLogin} = useContext(UserContext);
    console.log(userLogin, setUserLogin);
    return (
        <>
            <h1>Login Page</h1>
            <h3>{JSON.stringify(userLogin, null,3)}</h3>
            <button onClick={()=>setUserLogin({id:5, nombre:"Athenea", apellido:"Del Castillo"})}
             className="btn btn-outline-dark">Agregar usuario</button>
        </>
    )
}