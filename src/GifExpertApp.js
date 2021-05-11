import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["Dragon Ball", "DBZ", "Saint-Seiya"];

  const [categories, setCategories] = useState(["Vegeta"]);

  // const handleAdd = (event) => {
  //   setCategories([...categories, "Pokemon"]);
  // };

  return (
    <>
      <h2 className="main-Title">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      {""}
      {/*aca obligamos a que usen nuestros complementos d el aforma que nosotros queremos}
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
