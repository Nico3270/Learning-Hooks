import { useEffect, useState } from "react";
import { CarouselComponent } from "./CarouselComponent";

const getImagen = async (busqueda) => {
    const apiKey = "Y9hP1MFc8eF7fyVHH5jOraD9ph0SKW4ORgI";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=10&offset=0&rating=g&lang=en`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data.length > 0) {
            const urlImagen = data.data[2].images.downsized_medium.url;
            return urlImagen;
        } else {
            throw new Error("No se encontró ninguna imagen");
        }
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener la imagen");
    }
};

export const Carousel = () => {
    let [quotes, setQuotes] = useState([]);
    let [resultado, setResultado] = useState([]);
    let [final, setFinal] = useState([]);
    let [plus, setPlus] = useState(0);
    useEffect(() => {    
        const fetchData = async () => {
            try {
                const url = `https://api.breakingbadquotes.xyz/v1/quotes/10`;
                const response = await fetch(url);
                const data = await response.json();
 
                setQuotes( 
                    data.map((quote, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            aria-label={`Slide ${index + 1}`}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : ""}
                        ></button>
                    ))
                );

                const resultadoPromises = data.map(async (quote, index) => {
                    const imagenFinal = await getImagen(data[index].author);
                    return { imagen: imagenFinal, frase: data[index].quote, author: data[index].author, key: index }
                });

                const resolvedResultado = await Promise.all(resultadoPromises);
                setResultado(resolvedResultado);

                setFinal(resultado.map((objeto) => {
                    return (<CarouselComponent key={objeto.key} clase={objeto.key ===0 ? "carousel-item active": "carousel-item"} imagen={objeto.imagen} frase={objeto.frase} author={objeto.author} />)
                }));

            } catch (error) {
                console.error(error);
            } 
        };
        fetchData();
    }, []);


    return (
        <>
            <div className="d-flex justify-content-center">
                <hr></hr>

                <div id="carouselExampleCaptions" className="carousel slide d-flex justify-content-center" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {quotes}
                    </div>
                    <div className="carousel-inner ">

                    {final}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}