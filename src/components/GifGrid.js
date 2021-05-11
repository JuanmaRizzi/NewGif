import React /* , { useState, useEffect }*/ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  console.log(loading);

  /*const [images, setImages] = useState([]);
 
  useEffect(() => {
    //useEffect e sun hook que recibe la una funcion(getGifs() que es la funcion que queremos limitar)
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]); //luego, el segundo argumenmto es un "arreglo de dependencias" En este caso, al estar vacio el array; quiere decir que no tiene ninguna dependencia
*/
  return (
    <>
      <h3 className="animate__animated animate__bounceInLeft animate__delay-2s">
        {" "}
        {category}
      </h3>

      {/* {loading ? "cargando..." : "data cargada"} */}

      {loading && (
        <p className=" webSearch animate__animated animate__hinge animate__delay-0.5s">
          cargando...
        </p>
      )}
      <div className="card-grid">
        {/* <ol>
         {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))} //esta es una forma de hacerlo; tb lo podemos desestructurar: 

        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}  //lo vamos a ahecr finalemnet usando el componente GifGridItem
      </ol>   */}

        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
