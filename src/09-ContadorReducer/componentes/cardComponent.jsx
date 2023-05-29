import { BotonComponent } from "./botonComponent"

export const CardComponent = ({ valores, idContador, color, contador, funcion, toDoAction , simbolo, reset}) => {
    return (
        <>
            <div className={"card-header text-white text-center bg-" + color}>
                Contador {idContador}
            </div>
            <div className="card-body mr-5">
                <h5 className="card-title text-center"> El valor áctual del contador es: {contador}</h5>
                <p className="card-text">La función de este botón es {funcion} el valor del contador en diferentes unidades</p>

                <div className="d-flex justify-content-center prueba">
                    <button className="btn btn-dark" onClick={() => {reset("reiniciar", 0)}}>Reset</button>
                    {valores.map(valor => {
                        return <BotonComponent key={valor} simbolo={simbolo} color={color} funcion={funcion} numero={valor} toDoAction={toDoAction} />;
                    })}
                </div>
            </div>

        </>
    )
}