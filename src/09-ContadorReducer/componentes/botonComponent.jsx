export const BotonComponent = ({ color, funcion, numero, toDoAction, simbolo }) => {
    
    return (
      <>
        <div className="d-flex justify-content-center prueba">
          <button
            className={"btn d-flex justify-content-between btn-outline-" + color}
            onClick={() => toDoAction(funcion, numero) }
          >
          {simbolo} {numero}
          </button>
        </div>
      </>
    );
  };
  