
export const CarouselComponent = ({ clase, imagen, author, frase }) => {
  return (
    <>
      <div className={clase}>
      <img src={imagen} className="d-block w-100 carousel" alt="..." />
      <div className="carousel-caption d-none d-md-block cuadro">
        <h5>{author}</h5>
        <p>{frase}</p>
      </div>
      </div>
    </>
  );
};


