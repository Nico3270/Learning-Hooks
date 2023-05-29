import { Route, Routes, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { ContadorReducer } from "../09-ContadorReducer/componentes/ContadorReducer";
import { TodoApp } from "../08-useReducer/TodoApp";
import { NavComponent } from "./NavComponent";
import { UserProvider } from "./context/UserProvider";
import { SimpleForm} from "../02-useEffect/SimpleForm";
import {Layout} from "../05-useLayoutEffect/Layout"
import { Carousel } from "./Carousel";


export const MainApp = () => {
    return (
        <>
            <UserProvider>
            <h1>Main App</h1>
            <NavComponent rutas={[{nombre:"Home", url:"", clase:"danger"},
            {nombre:"Contador", url:"contador", clase:"warning"},
            {nombre:"Todo App", url:"todo", clase:"info"}, 
            {nombre:"Login", url:"login", clase:"success"},
            {nombre:"Simple Form", url:"form", clase:"primary"}, 
            {nombre:"Carousel", url:"carousel", clase:"danger"}, 
            {nombre:"Breaking Bad", url:"breaking", clase:"warning"},  ]} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contador" element={<ContadorReducer />} />
                <Route path="/todo" element={<TodoApp />} />
                <Route path="/form" element={<SimpleForm />} />
                <Route path="/breaking" element={<Layout />} />
                <Route path="/carousel" element={<Carousel />} />
                <Route path="/*" element={<HomePage />} /> Forma 1
                <Route path="/*" element={<Navigate to="/home" />} /> {/* Forma 2, navegar a otra ruta (Ideal) */}
            </Routes>
            </UserProvider>
        </>
    );
};
