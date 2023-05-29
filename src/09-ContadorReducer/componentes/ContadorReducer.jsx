import { useEffect, useReducer, useState } from "react";
import { CardComponent } from "./cardComponent";


const contadorReducer = (initialValue, action) => {
    switch (action.type) {
        case "incrementar":
            return initialValue + action.payload;
        case "disminuir":
            return initialValue - action.payload;
        case "multiplicar":
            return initialValue * action.payload;
        case "dividir":
            return initialValue / action.payload;
        case "reiniciar":
            return initialValue = action.payload
        default:
            return initialValue;

    }
};

export const ContadorReducer = () => {
    const [contador, dispatch] = useReducer(contadorReducer, 0);
    const valores = [1,2,3,4,5,6,7,8,9,10];
    const apiKey = "9Wn4MiJc78rjNunkLcyJFB1iLJWFCRgI";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${contador}&limit=1&offset=0&rating=g&lang=en`;
    

    const [linkImg, setLinkImg] = useState("");


    useEffect(() => {
        // Llamada a la función personalizada de fetch aquí
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setLinkImg(data.data[0].images.downsized_medium.url);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [contador]);

    const toDoAction = (accion, number) => {
        const action = {
            type: accion,
            payload: number
        };
        dispatch(action);
    };

    const reset = (accion, number) => {
        const action = {
            type: accion,
            payload: number
        };
        dispatch(action);
    }

    return (
        <>
            <h3 className="text-center">
                Hola, este es el componente contador usando el Hook useReducer
            </h3>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">El valor del contador es {contador}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={linkImg} class="img-thumbnail prueba2 justify-content-center" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row">

                <div className="d-flex justify-content-center">

                    <div className="col-6 mr-2">
                        <CardComponent
                            valores={valores}
                            idContador={1}
                            color="info"
                            contador={contador}
                            funcion="incrementar"
                            toDoAction={toDoAction}
                            simbolo={"+"}
                            reset = {reset}
                        />
                    </div>
                    <div className="col-6 mr-2">
                        <CardComponent
                            valores={[5,10,15,20,25,30]}
                            idContador={2}
                            color="success"
                            contador={contador}
                            funcion="disminuir"
                            toDoAction={toDoAction}
                            reset = {reset}
                            simbolo = {"-"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
