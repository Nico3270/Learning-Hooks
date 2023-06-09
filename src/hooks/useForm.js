import {useState } from "react"


export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    

    const onInputChange =({target}) => {

        const {name,value} = target;
        setFormState({
            ...formState, [name]:value
        })
    }

    const onResetForm = () => {
        console.log("Funcionando el botón");
        setFormState(initialForm);

    }
    return {
        ...formState ,formState, onResetForm, onInputChange
    }
}